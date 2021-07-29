<template>
  <div class="token__amount__input">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="token__amount__input--container"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'AmountInputForm',
  props: {
    modelValue: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
.token__amount__input {
  @apply flex
      items-center
      p-1.5
      border-0 border-solid
      bg-black;
  &--container {
    @apply bg-black h-full w-full outline-none text-right text-xl text-white;
  }
}
</style>
