<template>
  <div :class="$style['about-view']">
    <h2 :class="$style['title']">Authors</h2>
    <div :class="$style['contributors-wrap']">
      <div :class="$style['contributor-card']">
        <div :class="$style['card-avatar']">
          <img alt="Avatar" :src="proImage" style="width: 48px; height: 48px; border-radius: 50%" />
        </div>
        <div>
          <div :class="$style['card-title']">
            <span :class="$style['card-name']">Mahbub Islam Mahim</span>
          </div>
          <div :class="$style['card-desc']">Senior Software Engineer</div>
        </div>
      </div>
      <div :class="$style['contributor-card']">
        <div :class="$style['card-avatar']">
          <IconPersonOutline style="width: 48px; height: 48px" />
        </div>
        <div>
          <div :class="$style['card-title']">
            <span :class="$style['card-name']">Tahmid Imtiaz Imu</span>
          </div>
          <div :class="$style['card-desc']">Software Engineer</div>
        </div>
      </div>
    </div>
    <div :class="$style.footer">
      <div>Samsung Research Ontology Studio</div>
      <a :class="$style['github-link']" href="https://research.samsung.com/srbd">
        Visit Samsung Research
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

import proImage from '../images/pro.jpg'
import IconPersonOutline from '../images/icon-person-outline.vue'

const ABOUT_API = 'https://raw.githubusercontent.com/webpilot-ai/data/main/about_vue3.json'

const cardsInfo = ref([])

onMounted(() => {
  fetch(ABOUT_API)
    .then(res => res.json())
    .then(data => {
      cardsInfo.value = data.persons.Contributors
      cardsInfo.value = [...cardsInfo.value, ...data.persons.Sponsors]
    })
})
</script>

<style lang="scss" module>
.about-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: var(--color-baseline-text);
  font-weight: 400;
  font-size: 14px;
}

.title {
  margin: 0;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 24px;
}

.contributors-wrap {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 12px;
  column-gap: max(8px, 2%);
}

.contributor-card {
  display: flex;
  align-self: center;
  justify-self: center;
  box-sizing: border-box;
  width: 222px;
  height: 102px;
  padding: 16px 8px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 10px 0 rgb(149 157 165 / 10%);
}

.card-avatar > img {
  width: 48px;
  min-width: 48px;
  height: 48px;
  margin-right: 8px;
  border-radius: 50%;
}

.card-title {
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-weight: 600;
  line-height: 20px;
}

.card-name {
  margin-right: 6px;
}

.card-title-link {
  display: inline-block;
  width: 16px;
  height: 16px;
  max-height: 16px;
}

.card-title-link + .card-title-link {
  margin-left: 6px;
}

.card-desc {
  margin-top: 8px;
  color: var(--color-icon-default-and-secondary-text);
  font-weight: 600;
  font-size: 12px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  color: var(--color-label-text, #929497);
}

.github-link {
  color: var(--color-brand-primary, #4f5aff);
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
}

@media screen and (width <= 2000px) {
  .contributors-wrap {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media screen and (width <= 1600px) {
  .contributors-wrap {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (width <= 1200px) {
  .contributors-wrap {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (width <= 1100px) {
  .contributors-wrap {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (width <= 700px) {
  .contributors-wrap {
    width: 100%;
  }

  .contributor-card {
    width: 174px;
    height: 102px;
    padding: 16px;
    padding-top: 24px;
  }

  .card-avatar {
    display: none;
  }
}

@media (prefers-color-scheme: dark) {
  .contributor-card {
    background: #323558;
    box-shadow: none;
  }

  .card-desc {
    color: #dcdffe;
  }
}
</style>
