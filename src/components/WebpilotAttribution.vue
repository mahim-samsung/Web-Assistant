<template>
  <section :class="$style.wrap" @click.stop="openSamsungResearch">
    <img :class="$style.logo" :src="SamsungLogo" alt="Samsung Research" />
    <span :class="$style.text">Samsung Research - Ontology Studio</span>
  </section>
</template>

<script setup>
import SamsungLogo from 'data-base64:~assets/icon/icon.png'

const openSamsungResearch = (event) => {
  event.preventDefault()
  event.stopPropagation()
  window.open('https://research.samsung.com/srbd', '_blank')
}
</script>

<style lang="scss" module>
.wrap {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.text {
  color: #929497;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
</style>
