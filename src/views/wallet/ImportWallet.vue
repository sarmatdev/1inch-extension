<template>
  <div>
    <h1>Import wallet</h1>
  </div>
  <section>
    <base-input v-model="name" label="Wallet Name" class="w-full"></base-input>
    <p>Private key</p>
    <base-textarea v-model="source"></base-textarea>
  </section>
  <div>
    <base-button class="w-full">Import</base-button>

    {{ isValidSource }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { validatePrivateKey } from '@/services/account'
export default defineComponent({
  name: 'Import wallet',
  setup() {
    const name = ref('')
    const source = ref('')
    const isValidSource = computed(() => {
      return validatePrivateKey(source.value)
    })

    return {
      name,
      source,
      isValidSource
    }
  }
})
</script>

<style lang="scss"></style>
