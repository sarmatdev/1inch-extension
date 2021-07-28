<template>
  <div class="token__input__search">
    <base-icon
      icon="/input-btn/search"
      class="token__input__search--icon"
    ></base-icon>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :type="type"
      class="token__input__search--container"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchInputForm',
  props: {
    modelValue: String,
    placeholder: String,
    type: String
  }
})
</script>

<style lang="scss" scoped>
.token__input__search {
  @apply flex
      items-center
      p-1.5
      border-0 border-solid
      rounded-xl
      bg-black;
  &--container {
    @apply bg-black h-full w-full outline-none text-white ml-2.5;
  }
}
</style>
