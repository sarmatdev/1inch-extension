<template>
  <section class="text-center grid grid-cols-1 gap-y-3">
    <h1 class="text-2xl text-word-3">Confirm mnemonic</h1>
    <base-input
      v-model="walletName"
      class="confirm__mnemonic__input"
      placeholder="Name"
      label="Set the wallet name"
    ></base-input>
    <base-textarea
      label="You must write the phrase in the correct order"
      v-model.trim="mnemonicForConfirm"
    ></base-textarea>
    <ul class="confirm__mnemonic__list">
      <li
        class="confirm__mnemonic__list--item"
        v-for="(mnemonicItem, idx) in mnemonicForConfirm
          .split(' ')
          .sort(() => Math.round(Math.random() * 100) - 50)"
        :key="idx"
        @click="mnemonicForConfirm.split(' ').push(mnemonicItem).join(' ')"
      >
        {{ mnemonicItem }}
      </li>
    </ul>
    <base-button
      @click="saveWallet"
      color="blue"
      :disabled="!mnemonicConfirmed"
      class="confirm__mnemonic__button"
      >Create Wallet</base-button
    >
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { validateMnemonic } from '@/services/account'
export default defineComponent({
  name: 'ConfirmMnemonic',
  setup() {
    const store = useStore()
    const router = useRouter()
    const mnemonicForConfirm = ref(
      'life equip reform inch author human lizard spray huge capable volume tenant'
    )

    const mnemonicConfirmed = computed(() => {
      return validateMnemonic(mnemonicForConfirm)
    })

    const nextWalletName = computed(() => {
      return `Wallet ${store.getters['wallets/accountsNum']}`
    })
    const walletName = ref(nextWalletName.value)

    function saveWallet() {
      store.dispatch('wallets/storeWallet', {
        name: walletName.value,
        address: mnemonicConfirmed.value.address,
        privateKey: mnemonicConfirmed.value.privateKey
      })
      store.commit('auth/setAuth', true)

      router.push('/swap')
    }

    return {
      store,
      router,
      walletName,
      mnemonicForConfirm,
      mnemonicConfirmed,
      saveWallet
    }
  }
})
</script>

<style lang="scss" scoped>
.confirm__mnemonic {
  @apply text-center grid grid-cols-1 gap-y-3;
  &__header {
    @apply text-2xl text-word-3;
  }
  &__input {
    @apply w-full;
  }
  &__list {
    @apply grid grid-cols-3 gap-2;
    &--item {
      @apply border border-word-4 text-word-4 border-solid rounded-xl cursor-pointer;
    }
  }
  &__button {
    @apply mx-16;
  }
}
</style>
