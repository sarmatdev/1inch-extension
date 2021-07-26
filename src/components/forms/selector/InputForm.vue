<template>
  <div class="selector__input">
    <input
    :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="selector__input--container"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'InputForm',
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

<style lang="scss">
.selector__input {
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
