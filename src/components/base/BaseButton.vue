<template>
  <component
    :is="rootTag"
    :to="to"
    :class="[$style.baseButton, $style[`baseButton--${color}`]]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    to: {
      type: String
    },
    loading: Boolean,
    color: {
      type: String,
      default: 'blue',
      validator: (value: string) => ['green', 'red', 'blue'].includes(value)
    }
  },
  computed: {
    rootTag(): string {
      if (this.to) {
        return 'router-link'
      }
      return this.tag
    }
  }
})
</script>

<style module lang="scss">
.baseButton {
  min-width: 4rem;
  @apply flex items-center font-semibold justify-center text-white px-3 py-2 rounded-md cursor-pointer outline-none transition-colors duration-200;
  &:disabled {
    cursor: not-allowed;
    @apply bg-gray-500;
  }
  &:hover {
    @apply shadow-lg;
  }
  &--green {
    @apply bg-green-500 hover:bg-green-600;
  }
  &--blue {
    @apply bg-blue-500 hover:bg-blue-600;
  }
  &--red {
    @apply bg-red-500 hover:bg-red-600;
  }
}
</style>
