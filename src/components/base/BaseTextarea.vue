<template>
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="base-textarea"
    type="text"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseTextarea',
  props: {
    modelValue: [String, Number],
    placeholder: String
  }
})
</script>

<style lang="scss">
.base-textarea {
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
</style>
