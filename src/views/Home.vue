<template>
  <div class="swap__page--container">
    <token-swap-handler
      class="swap__page--container--item"
      tokenPassMode="input"
    ></token-swap-handler>
    <token-swap-handler
      class="swap__page--container--item"
      tokenPassMode="output"
    ></token-swap-handler>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TokenSwapHandler from '../components/common/TokenSwapHandler.vue'

export default defineComponent({
  name: 'Home',
  components: { TokenSwapHandler }
})
</script>

<style lang="scss" scoped>
.swap__page--container {
  @apply h-full flex flex-col;
  &--item {
    @apply first:my-10;
  }
}
</style>
