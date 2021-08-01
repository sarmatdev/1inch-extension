<template>
  <div class="loading__background">
    <base-icon icon="/loading/loading-logo" iconType="png"></base-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseLoading',
  props: {
    icon: String
  }
})
</script>

<style lang="scss" scoped>
.loading__background {
  @apply fixed w-full h-full inset-0 z-50 flex items-center justify-center visible;
}
</style>
