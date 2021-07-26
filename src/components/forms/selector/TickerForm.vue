<template>
  <div @click="$emit('click', $event)" class="ticker">
    <base-icon class="ticker--icon" :icon="`${icon}`"></base-icon>
    <div class="ticker__container">
      <ul class="ticker__container--item">
        <li class="ticker__container--symbol">
          <base-title><slot name="symbol"></slot></base-title>
        </li>
        <li class="ticker__container--token">
          <slot name="token"></slot>
        </li>
      </ul>
      <ul class="ticker__container--item">
        <li class="ticker__container--name">
          <base-title><slot name="name"></slot></base-title>
        </li>
        <li class="ticker__container--price">
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
    icon: String
  }
})
</script>

<style lang="scss">
.ticker {
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
      @apply text-sm;
      color: #7e96b8;
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
