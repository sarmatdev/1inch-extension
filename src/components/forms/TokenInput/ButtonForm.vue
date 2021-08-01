<template>
  <div @click="$emit('click', $event)" class="token__input__button">
    <base-token-logo
      :icon="buttonIcon"
      class="token__input__button--icon"
    >
    </base-token-logo>
    <base-title><slot /></base-title>
    <base-icon
      icon="/input-btn/down"
      class="token__input__button--icon"
    ></base-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonForm',
  props: {
    buttonIcon: {
      type: String,
      default: '/network-select/eth'
    }
  }
})
</script>

<style lang="scss" scoped>
.token__input__button {
  @apply flex items-center bg-black text-word-3;
  &--icon {
    @apply w-4 h-4 first:mr-2.5 last:ml-2.5;
  }
}
</style>
