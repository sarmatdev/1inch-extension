<template>
  <section class="import__wallet">
    <h1 class="import__wallet__header ">Import wallet</h1>
    <base-input v-model="name" label="Wallet Name" class="import__wallet__input"></base-input>
    <base-textarea label="Private key" v-model="source"></base-textarea>
    <base-button color="blue__bright" class="import__wallet__button">Import</base-button>
  </section>
  {{ isValidSource }}
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

<style lang="scss">
.import__wallet{
  @apply grid grid-cols-1 gap-y-8;
  &__header{
    @apply text-2xl text-word-3 text-center font-bold;
  }
  &__input,
  &__button{
    @apply w-full;
  }

}

</style>
