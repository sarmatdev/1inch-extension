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
  background-color: rgba(255, 156, 8, 0.3);
  color: #fff;
  border-radius: 10px;
}
</style>
