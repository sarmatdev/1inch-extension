<template>
  <h1 class="title"><slot /></h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseTitle'
})
</script>

<style>
.title {
  @apply text-sm text-white text-left;
}
</style>
