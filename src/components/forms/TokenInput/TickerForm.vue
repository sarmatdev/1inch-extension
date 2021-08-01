<template>
  <div @click="$emit('click', $event)" class="token__input__ticker">
    <base-token-logo
      class="token__input__ticker--icon"
      :icon="tickerIcon"
    ></base-token-logo>
    <div class="token__input__ticker__container">
      <ul class="token__input__ticker__container--item">
        <li class="token__input__ticker__container--symbol">
          <base-title><slot name="symbol"></slot></base-title>
        </li>
        <li class="token__input__ticker__container--token">
          <slot name="token"></slot>
        </li>
      </ul>
      <ul class="token__input__ticker__container--item">
        <li class="token__input__ticker__container--name">
          <base-title><slot name="name"></slot></base-title>
        </li>
        <li class="token__input__ticker__container--price">
          <slot name="price"></slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TickerForm',
  props: {
    tickerIcon: String
  }
})
</script>

<style lang="scss" scoped>
.token__input__ticker {
  @apply flex
      items-center
      p-2.5
      border-0 border-solid
      rounded-2xl 
      bg-gray-800;
  &:hover {
    @apply bg-gray-700 transition;
  }
  &--icon {
    @apply mr-2.5;
  }
  &__container {
    @apply flex items-center justify-between w-full;
    &--price,
    &--token {
      @apply text-sm text-word-5;
    }
    &--name,
    &--symbol {
      @apply text-word-3;
    }
    &--price,
    &--name {
      @apply text-right;
    }
    &--token,
    &--symbol {
      @apply text-left;
    }
  }
}
</style>
