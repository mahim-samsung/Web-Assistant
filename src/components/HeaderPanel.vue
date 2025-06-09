<template>
  <section :class="$style.headerPanel">
    <section :class="$style.headerLogos">
      <img :class="$style.logo" :src="SamsungLogo" />
      <span :class="$style.headerText">Samsung AI</span>
    </section>
    <section :class="$style.headerIcons">
      <Popper v-show="false" :class="$style.popover" hover offset-distance="8" placement="top">
        <InteractiveIcon :class="$style.icon" type="setting" @click="openSettingPage" />
        <template #content>
          <span :class="$style.popoverText">Settings</span>
        </template>
      </Popper>
      <Popper :class="$style.popover" hover offset-distance="8" placement="top">
        <InteractiveIcon :class="$style.icon" type="close" @click="closePopup" />
        <template #content>
          <span :class="$style.popoverText">Close</span>
        </template>
      </Popper>
    </section>
  </section>
</template>

<script setup>
import {sendToBackground} from '@plasmohq/messaging'
import Popper from 'vue3-popper'

import SamsungLogo from 'data-base64:~assets/icon/icon.png'

import InteractiveIcon from './InteractiveIcon/InteractiveIcon.vue'

const emits = defineEmits(['onClose'])

const openSettingPage = () => {
  sendToBackground({name: 'openSetting'})
}

const closePopup = () => {
  emits('onClose')
}
</script>

<style lang="scss" module>
.headerPanel {
  display: flex;
  flex-direction: row;
  height: 24px;
  margin-bottom: 8px !important;
}

.headerLogos {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.headerIcons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto !important;
}

.headerText {
  color: #292929;
  font-weight: 500;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
}

.logo {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  object-fit: contain;
}

.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:hover {
    filter: brightness(2);
  }
}

.icon + .icon {
  margin-left: 15px;
}

.popoverText {
  padding: 4px 8px;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  background-color: black;
  border-radius: 5px;
}

.popover {
  max-height: 24px;
  line-height: 24px;
}

.popover + .popover {
  padding-left: 17px;
}
</style>
