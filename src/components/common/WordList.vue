<template>
  <div class="mnemonic__phrase">
    <ul class="mnemonic__phrase--list">
      <li class="" v-for="(word, i) in words" :key="i">
        <span class="mnemonic__phrase--list__id">{{ i + 1 }}</span>
        <span class="mnemonic__phrase--list__word">{{ word }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WordList',
  props: {
    words: Array
  }
})
</script>

<style lang="scss">
.mnemonic__phrase {
  @apply max-h-52 p-3 rounded-2xl bg-gray-800;
  &--list {
    @apply grid grid-rows-6 grid-flow-col gap-x-12 text-left text-lg;
    &__id {
      @apply text-word-5 mr-3;
    }
    &__word {
      @apply text-word-3;
    }
  }
}
</style>
