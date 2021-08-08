<template>
  <div class="welcome">
    <img
      src="../assets/images/wallet-welcome.png"
      width="360"
      alt="Welcome Image"
    />
    <h1 class="text-white font-black text-lg mt-8">Wallet is not connected</h1>
    <p class="my-20">You can import an existing wallet or create a new one</p>
    <div class="flex justify-around items-center">
      <base-button color="blue" to="/create-wallet">Create</base-button>
      <base-button color="blue" to="/import-wallet">Import</base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss">
.welcome {
  @apply text-center flex flex-col;
  &__hero {
  }
}
</style>
