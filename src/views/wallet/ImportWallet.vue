<template>
  <section class="import__wallet">
    <h1 class="import__wallet__header">Import wallet</h1>
    <base-input
      v-model="name"
      label="Wallet Name"
      class="import__wallet__input"
    ></base-input>
    <base-textarea label="Private key" v-model="source"></base-textarea>
    <base-button color="gradient" @click="importWallet">Import</base-button>
  </section>
  {{ isValidSource }}
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { validatePrivateKey, createFromPrivateKey } from '@/services/account'
export default defineComponent({
  name: 'Import wallet',
  setup() {
    const store = useStore()
    const router = useRouter()

    const name = ref('')
    const source = ref('')
    const isValidSource = computed(() => {
      return validatePrivateKey(source.value)
    })

    const importedWallet = computed(() => {
      return createFromPrivateKey(source.value)
    })

    function importWallet() {
      if (isValidSource.value) {
        createFromPrivateKey(source.value)
        store.dispatch('wallets/storeWallet', {
          name: name.value,
          address: importedWallet.value.address,
          privateKey: importedWallet.value.privateKey
        })

        router.push('/')
      }
    }

    return {
      name,
      source,
      isValidSource,
      importWallet
    }
  }
})
</script>

<style lang="scss">
.import__wallet {
  @apply grid grid-cols-1 gap-y-8;
  &__header {
    @apply text-2xl text-word-3 text-center font-bold;
  }
  &__input,
  &__button {
    @apply w-full;
  }
}
</style>
