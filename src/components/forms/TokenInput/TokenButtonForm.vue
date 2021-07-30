<template>
  <base-button class="token__input--token__button">
    <base-wrapper>
      <base-icon
        class="token__input--token__button--icon"
        icon="/token-input/add"
      ></base-icon>
      <base-title class="token__input--token__button--text">
          <slot />
      </base-title>
    </base-wrapper>
  </base-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TokenButtonForm'
})
</script>

<style lang="scss" scoped>
.token__input--token__button {
  @apply px-8;
}
</style>
