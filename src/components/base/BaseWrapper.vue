<template>
  <div class="token__input__wrapper">
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
.token__input__wrapper {
  @apply rounded-2xl w-full flex justify-between items-center;
}
</style>
