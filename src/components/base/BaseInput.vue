<template>
  <div class="base-input">
    <label class="base-input__label">{{ label }}</label>
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
  display: flex;
  flex-direction: column;
  align-items: start;
  &__label {
    font-weight: 600;
    color: #7e96b8;
  }
  &__input {
    width: 100%;
    background-color: #06070a;
    border: 1px solid #37445a;
    color: #fff;
    padding: 10px 20px;
    outline: none;
    border-radius: 12px;
    font-weight: 500;
  }
}
</style>
