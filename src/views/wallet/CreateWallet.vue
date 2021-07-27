<template>
  <h1>Create Wallet</h1>
  <section class="mnemonic">
    <h1 class="text-white font-black text-lg">Your mnemonic phrase</h1>
    <p>
      Write down or copy this phrase in the correct order and keep it in a safe
      place.
    </p>
    <base-warning
      class="mt-1"
      text="Never give your recovery phrase to third parties, keep it in a safe place!"
    ></base-warning>
    <WordList :words="mnemonic" />
    <p>{{ wallet.mnemonic.phrase }}</p>
  </section>
  <section class="agreement">
    <div>
      <input type="checkbox" id="creation-agreement" v-model="agree" />
      <label for="creation-agreement"
        >I understand that if you lose your recovery phrase, you will not be
        able to access my funds</label
      >
    </div>
    <base-button :disabled="!agree" class="w-full">Continue</base-button>
  </section>
  <section>
    <h2 class="font-bold">Confirm mnemonic</h2>
    <span>Set the wallet name</span>
    <base-input
      v-model="walletName"
      class="w-full mb-5"
      placeholder="Name"
    ></base-input>
    <base-textarea v-model.trim="mnemonicForConfirm"></base-textarea>
    <div>
      {{ mnemonicConfirmed }}
    </div>
    <base-button
      @click="saveWallet"
      :disabled="!mnemonicConfirmed"
      class="w-full"
      >Create Wallet</base-button
    >
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import WordList from '@/components/common/WordList.vue'
import { createRandom, validateMnemonic } from '@/services/account'

export default defineComponent({
  name: 'Create wallet',
  components: {
    WordList
  },
  setup() {
    const store = useStore()
    const wallet = createRandom()
    const mnemonic = wallet.mnemonic.phrase.split(' ')

    console.log('createRandom', wallet)
    console.log(
      'validateMnemonic',
      '0x49D4710499CD8121D1022CeB77026a7eC8CdE6e2',
      validateMnemonic(
        'cousin loop token junk trumpet then guitar vague choice license south reunion'
      )
    )

    const agree = ref(false)
    const walletName = ref('')
    const mnemonicForConfirm = ref('')

    return {
      store,
      mnemonic,
      agree,
      wallet,
      walletName,
      mnemonicForConfirm
    }
  },
  computed: {
    mnemonicConfirmed() {
      // @ts-ignore
      return validateMnemonic(this.mnemonicForConfirm)
    }
  },
  methods: {
    saveWallet() {
      this.store.dispatch('wallets/storeWallet', {
        name: this.walletName,
        ...this.wallet
      })
    }
  }
})
</script>

<style lang="scss">
.create-wallet {
  .mnemonic {
    height: 60%;
  }
  .agreement {
    position: fixed;
    width: 280px;
    bottom: 200px;
    background-color: #1e2129;
    z-index: 999;
  }
}
</style>
