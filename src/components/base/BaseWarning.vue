<template>
  <div :class="`base__warning--${name}`" class="base__warning">
    <div :class="`base__warning--${position}__container`">
      <base-icon
        :class="`base__warning--${position}__icon`"
        :name="name"
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
    },
    name: {
      type: String,
      default: 'alert-triangle',
      validator: (value: string) =>
        ['alert-circle', 'alert-triangle'].includes(value)
    }
  }
})
</script>

<style lang="scss">
.base__warning {
  @apply rounded-2xl p-2.5 text-xs font-light;
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
      @apply w-8 h-8 my-auto mr-2.5;
    }
  }
  &--alert-triangle {
    @apply bg-red-600 text-red-600 bg-opacity-20;
  }
  &--alert-circle {
    @apply bg-yellow-400 text-warning bg-opacity-20 text-word-6;
  }
}
</style>
