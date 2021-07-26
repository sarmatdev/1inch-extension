<template>
  <div class="container text-center">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <h1 class="text-red-500">App started! To The Moon🚀🌑</h1>
    <select-input description="You Pay"></select-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SelectInput from '../components/common/SelectInput.vue'

export default defineComponent({
  name: 'Home',
  components: { SelectInput }
})
</script>

<style></style>
