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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ethers } from 'ethers'
import WordList from '@/components/common/WordList.vue'

export default defineComponent({
  name: 'Create wallet',
  components: {
    WordList
  },
  setup() {
    const phrase = ethers.Wallet.createRandom().mnemonic
    const mnemonic = phrase.phrase.split(' ')

    const agree = ref(false)

    return {
      mnemonic,
      agree
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
