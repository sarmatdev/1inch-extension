<template>
  <h1 class="base__title"><slot /></h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseTitle',
  props: {
    font: {
      type: String,
      default: 'medium'
    }
  }
})
</script>

<style>
.base__title {
  @apply text-left font-main font-medium;
}
</style>
