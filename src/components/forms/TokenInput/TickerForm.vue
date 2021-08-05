<template>
  <div
    @click="$emit('click', $event)"
    class="
      flex
      items-center
      p-2.5
      border-0 border-solid
      rounded-2xl
      bg-gray-800
      cursor-pointer
      hover:bg-gray-700
      transition
    "
  >
    <base-token-logo class="mr-2.5" :icon="tickerIcon"></base-token-logo>
    <div class="flex items-center justify-between w-full">
      <ul>
        <li class="text-word-3 text-left">
          <base-title><slot name="symbol"></slot></base-title>
        </li>
        <li class="text-sm text-word-5 text-left">
          <slot name="token"></slot>
        </li>
      </ul>
      <ul>
        <li class="text-word-3" text-right>
          <base-title><slot name="name"></slot></base-title>
        </li>
        <li class="text-sm text-word-5 text-right">
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

<style></style>
