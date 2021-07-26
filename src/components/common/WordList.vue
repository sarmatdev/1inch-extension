<template>
  <div class="mnemonic-phrase">
    <ul class="grid grid-cols-2 text-left text-lg">
      <li class="" v-for="(word, i) in words" :key="i">
        {{ i + 1 }} - {{ word }}
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
.mnemonic-phrase {
  background-color: #3d4f6b;
  color: #fff;
  @apply h-60;
}
</style>
