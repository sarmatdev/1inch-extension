<template>
  <div @click="$emit('click', $event)" class="token__input__button">
    <base-icon :icon="`${icon}`" class="token__input__button--icon"></base-icon>
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
    icon: {
      type: String,
      default: '/network-select/eth'
    }
  }
})
</script>

<style lang="scss" scoped>
.token__input__button {
  @apply flex items-center bg-black;
  &--icon {
    @apply first:mr-2.5;
  }
}
</style>
