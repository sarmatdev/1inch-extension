<template>
  <div class="base-textarea">
    <label class="base-textarea__label">{{ label }}</label>
    <textarea
      class="base-textarea__field"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseTextarea',
  props: {
    modelValue: [String, Number],
    placeholder: String,
    label: String
  }
})
</script>

<style lang="scss">
.base-textarea {
  @apply flex flex-col items-start;

  &__label {
    @apply text-word-5 text-left font-medium;
  }

  &__field {
    @apply w-full bg-black border border-word-4 border-solid text-word-3 px-5 py-2.5 outline-none rounded-2xl font-medium resize-none h-24;
  }
}
</style>
