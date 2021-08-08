<template>
  <div class="base-input">
    <label v-if="value" class="base-input__label">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="base-input__input"
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseInput',
  props: {
    modelValue: [String, Number],
    label: String,
    placeholder: String
  }
})
</script>

<style lang="scss">
.base-input {
  @apply flex flex-col items-start;
  &__label {
    @apply text-word-5 text-left font-medium;
  }
  &__input {
    @apply w-full bg-black border border-word-4 border-solid text-word-3 px-5 py-2.5 outline-none rounded-2xl font-medium;
  }
}
</style>
