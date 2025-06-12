<template>
  <div>
    <div :class="$style['credit-status']">
      <div :class="$style['credit-card']">
        <div :class="$style['credit-card-content']">
          <div :class="$style['credit-card-title']">Total Requests</div>
          <div v-show="usage.current >= 0" :class="$style['credit-card-value']">
            {{ usage.current }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {storeToRefs} from 'pinia'

import useUserStore from '@/stores/user'

const userStore = useUserStore()
const {usage} = storeToRefs(userStore)
const {getUsage} = userStore

if (usage.value.current === -1) getUsage()
</script>

<style lang="scss" module>
.credit-status {
  display: flex;
  align-items: center;
  color: var(--color-baseline-text);
  font-weight: 400;
  font-size: 14px;
}

.credit-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 200px;
}

.credit-card-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.credit-card-title {
  font-size: 14px;
  color: #585b58;
}

.credit-card-value {
  font-size: 24px;
  font-weight: 600;
  color: #4128d3;
}

@media only screen and (width <= 700px) {
  .credit-status {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
