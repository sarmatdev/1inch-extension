<template>
  <div class="flex items-center p-1.5 border-0 border-solid bg-black">
    <input
      v-if="passMode === 'input'"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="bg-black h-full w-full outline-none text-right text-xl text-word-3"
      :type="type"
      :placeholder="placeholder"
    />
    <p
      v-if="passMode === 'output'"
      class="bg-black h-full w-full text-right text-xl text-word-3"
    >
      <slot />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AmountPassForm',
  props: {
    modelValue: [String, Number],
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    },
    passMode: {
      type: String,
      default: 'input',
      validator: (value: string) => ['input', 'output'].includes(value)
    }
  }
})
</script>

<style lang="scss" scoped>
.token__amount__input {
  @apply flex items-center p-1.5 border-0 border-solid bg-black;
  &--container {
    @apply bg-black h-full w-full outline-none text-right text-xl text-word-3;
  }
}
.token__amount__output--container {
  @apply bg-black h-full w-full text-right text-xl text-word-3;
}
</style>
