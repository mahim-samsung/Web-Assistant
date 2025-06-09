import {ref, toRaw} from 'vue'
import {Storage} from '@plasmohq/storage'
import pangu from 'pangu'

import useStore from '@/stores/store'
import {WEBPILOT_OPENAI, WEBPILOT_CONFIG_STORAGE_KEY, API_ORIGINS} from '@/config'
import {askOpenAI, parseStream} from '@/io'

import {$gettext} from '@/utils/i18n'

const getPrompt = (referenceText, command, isAskPage, previousCommand, previousAnswer) => {
  const foundResult = !!previousAnswer && previousAnswer !== ''
  // select mode
  if (!isAskPage && foundResult) {
    return [
      {
        role: 'assistant',
        content: `For your next input, I will do without any explanation: ${previousCommand}`,
      },
      {
        role: 'user',
        content: referenceText.trim(),
      },
      {
        role: 'assistant',
        content: previousAnswer,
      },
      {
        role: 'user',
        content: command,
      },
    ]
  }
  // QA mode
  if (isAskPage && foundResult) {
    return [
      {
        role: 'function',
        name: 'current_webpage',
        content: referenceText,
      },
      {
        role: 'user',
        content: previousCommand,
      },
      {
        role: 'assistant',
        content: previousAnswer,
      },
      {
        role: 'user',
        content: command,
      },
    ]
  }
  // first time select
  if (!isAskPage) {
    return [
      {
        role: 'assistant',
        content: `For your next input, I will do without any explanation: ${command}`,
      },
      {
        role: 'user',
        content: referenceText.trim(),
      },
    ]
  }
  // first time QA
  return [
    {
      role: 'function',
      name: 'current_webpage',
      content: referenceText,
    },
    {
      role: 'user',
      content: command,
    },
  ]
  // if (isAskPage) {
  //   return [
  //     {
  //       role: 'assistant',
  //       content: referenceText,
  //       // content: `This is a webpage contains content and metadata (that adheres to The Open Graph protocol guidelines).

  //       // Content: ${referenceText.content}
  //       // Meta: ${JSON.stringify(referenceText.meta)}`,
  //     },
  //     {
  //       role: 'user',
  //       content: command,
  //     },
  //   ]
  // }
  // return [
  //   {
  //     role: 'assistant',
  //     content: `For your next input, I will do without any explanation: ${command}`,
  //   },
  //   {
  //     role: 'user',
  //     content: referenceText.trim(),
  //   },
  // ]
}

export default function useAskAi() {
  const loading = ref(false)
  const generating = ref(false)
  const success = ref(false)
  const done = ref(false)
  const error = ref(false)
  const result = ref('')
  const previousCommand = ref('')
  const errorMessage = ref('')

  const store = useStore()
  const storage = new Storage()

  const resetState = () => {
    loading.value = false
    generating.value = false
    success.value = false
    done.value = false
    error.value = false
    result.value = ''
    errorMessage.value = ''
  }

  const askAi = async ({
    referenceText = '',
    command,
    authKey = '',
    url = null,
    isAskPage = true,
    apiOrigin = null,
  } = {}) => {
    const previousAnswer = result.value

    // clean result
    resetState()

    if (!referenceText && !command) return askOpenAI()

    const text = referenceText || store.selectedText
    const message = getPrompt(text, command, isAskPage, previousCommand.value, previousAnswer)

    const currentConfig = (await storage.get(WEBPILOT_CONFIG_STORAGE_KEY)) || store.config

    loading.value = true
    generating.value = true

    const model = {
      ...toRaw(currentConfig.model),
    }
    if (isAskPage) {
      // Global popup，use 0125 as default`
      model.model = 'gpt-4o-mini'
    }

    let storeAuthKey = currentConfig.authKey
    let storeHostUrl = currentConfig.selfHostUrl
    const currentApiOrigin = apiOrigin || currentConfig.apiOrigin

    if (currentApiOrigin === API_ORIGINS.GENERAL) {
      storeAuthKey = WEBPILOT_OPENAI.AUTH_KEY
      storeHostUrl = WEBPILOT_OPENAI.HOST_URL
    } else if (currentApiOrigin === API_ORIGINS.AZURE) {
      const {selfHostUrl, azureApiVersion, azureDeploymentID} = currentConfig

      // https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#completions
      storeHostUrl = `https://${selfHostUrl}.openai.azure.com/openai/deployments/${azureDeploymentID}/chat/completions?api-version=${azureApiVersion}`
    } else {
      if (storeHostUrl === WEBPILOT_OPENAI.HOST_URL) {
        storeHostUrl = ''
      }
    }

    return askOpenAI({
      authKey: authKey || storeAuthKey,
      model,
      message,
      baseURL: url || storeHostUrl,
      apiOrigin: currentApiOrigin,
    })
      .then(streamReader => {
        loading.value = false
        success.value = true
        parseStream(streamReader, reqResult => {
          result.value = pangu.spacing(reqResult.text)
          done.value = reqResult.done
          previousCommand.value = command
          if (done.value) {
            generating.value = false
          }
        })
      })
      .catch(err => {
        loading.value = false
        error.value = true

        if (err instanceof DOMException && /aborted/.test(err.message)) return

        if (err.response && err.response.status === 401) {
          errorMessage.value = err.response?.data?.error?.message

          if (currentApiOrigin !== 'general') {
            store.setConfig({
              ...currentConfig,
              authKey: '',
              selfHostUrl: '',
              isAuth: false,
            })
          } else {
            store.setConfig({
              ...currentConfig,
              authKey: '',
              selfHostUrl: '',
              isAuth: false,
              azureApiVersion: '',
              azureDeploymentID: '',
            })
          }

          throw err
        } else if (err.response && err.response.status === 402) {
          errorMessage.value = $gettext(
            'Free usage for this week has been exhausted (50 times/week). You can input your OpenAI API Key in the settings page for unlimited use, or wait for the quota refresh at 0:00 UTC+0 on Monday.'
          )

          throw err
        } else {
          let errorMsg = err.message || ''

          if (err?.response?.data?.error?.message) {
            // eslint-disable-next-line
            errorMsg = `OpenAI: ${err.response.data.error.message}`
            // TODO: add toast
          }

          errorMessage.value = `OpenAI: ${errorMsg}`
        }

        throw err
      })
  }

  return {
    result,
    loading,
    generating,
    done,
    success,
    error,
    errorMessage,
    askAi,
  }
}
