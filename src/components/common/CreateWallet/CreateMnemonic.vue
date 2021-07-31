<template>
  <main class="create-wallet">
    <h1>Craete Wallet</h1>
    <section class="create-wallet__mnemonic">
      <h1 class="text-white font-black text-lg">Your mnemonic phrase</h1>
      <p>
        Write down or copy this phrase in the correct order and keep it in a
        safe place.
      </p>
      <base-warning
        class="mt-1"
        text="Never give your recovery phrase to third parties, keep it in a safe place!"
      ></base-warning>
      <WordList :words="mnemonic" />
    </section>
    <section class="create-wallet__agreement">
      <input type="checkbox" id="creation-agreement" v-model="agree" />
      <label for="creation-agreement"
        >I understand that if you lose your recovery phrase, you will not be
        able to access my funds</label
      >
      <base-button @click="continueToConfirm" :disabled="!agree" class="w-full"
        >Continue</base-button
      >
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { createRandom } from '@/services/account'
import WordList from '@/components/common/WordList.vue'

export default defineComponent({
  name: 'CraeteWallet',
  components: {
    WordList
  },
  emits: ['nextStep'],
  setup(_, { emit }) {
    const wallet = createRandom()
    const mnemonic = wallet.mnemonic.phrase.split(' ')
    const agree = ref(false)

    function continueToConfirm() {
      emit('nextStep', 3)
    }

    return {
      mnemonic,
      continueToConfirm,
      agree
    }
  }
})
</script>

<style lang="scss">
.create-wallet {
  height: 100%;

  &__mnemonic {
  }

  &__agreement {
  }
}
</style>
