<template>
  <h1 class="selector__description"><slot /></h1>
</template>

<script>
export default {
  name: 'DescriptionForm'
}
</script>

<style lang="scss">
.selector__description {
  @apply text-base text-gray-600 font-bold px-1.5;
}
</style>
