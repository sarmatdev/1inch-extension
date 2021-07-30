<template>
  <div class="base__warning">
    <div :class="`base__warning--${position}__container`">
      <base-icon
        :class="`base__warning--${position}__icon`"
        icon="/token-input/warning"
      ></base-icon>
      <span><slot /></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseWarning',
  props: {
    position: {
      type: String,
      default: 'vertically',
      validator: (value: string) => ['vertically', 'horizontal'].includes(value)
    }
  }
})
</script>

<style lang="scss">
.base__warning {
  &--vertically {
    &__container {
      @apply flex flex-col justify-center text-center;
    }
    &__icon {
      @apply w-8 h-8 mx-auto;
    }
  }
  &--horizontal {
    &__container {
      @apply flex justify-around items-center;
    }
    &__icon {
      @apply w-8 h-8 my-auto;
    }
  }
  @apply bg-red-900 bg-opacity-20 text-red-700 rounded-2xl p-2.5 text-sm font-light;
}
</style>
