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
  display: flex;
  flex-direction: column;
  align-items: start;

  &__label {
    font-weight: 600;
    color: #7e96b8;
    text-align: left;
  }

  &__field {
    background-color: #06070a;
    border: 1px solid #37445a;
    color: #fff;
    padding: 10px 20px;
    outline: none;
    border-radius: 12px;
    font-weight: 500;
    width: 100%;
    min-height: 200px;
    resize: none;
  }
}
</style>
