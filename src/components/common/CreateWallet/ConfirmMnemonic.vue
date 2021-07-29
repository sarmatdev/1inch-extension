<template>
  <h1>Confirm mnemonic</h1>
  <section>
    <base-input
      v-model="walletName"
      class="w-full mb-5"
      placeholder="Name"
      label="Set the wallet name"
    ></base-input>
    <base-textarea
      label="You must write the phrase in the correct order"
      v-model.trim="mnemonicForConfirm"
    ></base-textarea>
    {{ walletFromMnemonic }}
    <base-button
      @click="saveWallet"
      :disabled="!mnemonicConfirmed"
      class="w-full"
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
    const walletName = ref('')
    const mnemonicForConfirm = ref(
      'life equip reform inch author human lizard spray huge capable volume tenant'
    )

    const mnemonicConfirmed = computed(() => {
      return validateMnemonic(mnemonicForConfirm)
    })

    // const walletFromMnemonic = computed(() => {
    //   return createFromMnemonic(mnemonicForConfirm.value)
    // })

    function saveWallet() {
      store.dispatch('wallets/storeWallet', {
        name: walletName.value,
        address: mnemonicConfirmed.value.address,
        privateKey: mnemonicConfirmed.value.privateKey
      })

      router.push('/')
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
// life equip reform inch author human lizard spray huge capable volume tenant
</script>

<style></style>
