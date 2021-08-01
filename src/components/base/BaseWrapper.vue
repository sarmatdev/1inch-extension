<template>
  <div class="base__wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseWrapper'
})
</script>

<style lang="scss" scoped>
.base__wrapper {
  @apply w-full flex justify-between items-center;
}
</style>
