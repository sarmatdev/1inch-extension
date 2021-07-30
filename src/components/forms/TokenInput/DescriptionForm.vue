<template>
  <h1 class="token__input__description"><slot /></h1>
</template>

<script>
export default {
  name: 'DescriptionForm'
}
</script>

<style lang="scss" scoped>
.token__input__description {
  @apply text-base text-word-4 font-bold px-1.5;
}
</style>
