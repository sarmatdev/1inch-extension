<template>
  <span class="token__input__label"><slot /></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LabelForm'
})
</script>

<style lang="scss" scoped>
.token__input__label {
  @apply w-full text-base text-word-5 bg-black;
}
</style>
