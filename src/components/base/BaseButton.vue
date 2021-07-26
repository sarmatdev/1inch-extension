<template>
  <button @click="$emit('click', $event)" class="button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseButton'
})
</script>

<style lang="scss">
.button {
  @apply flex 
  justify-center 
  items-center 
  p-3.5 
  border 
  border-solid 
  rounded-2xl 
  shadow-xl 
  text-base 
  text-white;
  background-color: #3179e4;
}
</style>
