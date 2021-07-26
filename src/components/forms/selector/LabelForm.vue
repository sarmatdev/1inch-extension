<template>
  <h1 class="selector__label"><slot /></h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LabelForm'
})
</script>

<style lang="scss">
.selector__label {
  @apply text-base text-gray-500 bg-black;
}
</style>
