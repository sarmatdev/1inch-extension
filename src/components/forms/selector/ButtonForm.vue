<template>
  <div @click="$emit('click', $event)" class="selector__button">
    <base-icon :icon="`${icon}`" class="selector__button--icon"></base-icon>
    <base-title><slot /></base-title>
    <base-icon icon="down" class="selector__button--icon"></base-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonForm',
  props: {
    icon: String
  }
})
</script>

<style lang="scss">
.selector__button {
  @apply flex items-center bg-black;
  &--icon {
    @apply first:mr-2.5 last:ml-2.5;
  }
}
</style>
