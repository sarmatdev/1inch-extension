<template>
  <div class="base-warning">{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseWarning',
  props: {
    text: String
  }
})
</script>

<style lang="scss">
.base-warning {
  padding: 10px 20px;
  background-color: rgb(231, 208, 117);
  border-radius: 10px;
}
</style>
