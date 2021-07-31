<template>
  <div class="welcome">
    <div class="welcome__hero">
      <img
        src="../assets/images/wallet-welcome.png"
        width="280"
        alt="Welcome Image"
      />
      <h1 class="text-white font-black text-lg">Wallet is not connected</h1>
      <p>You can import an existing wallet or create a new one</p>
    </div>
    <div class="grid grid-cols-2 gap-x-4 mt-auto">
      <base-button to="/create-wallet">Create</base-button>
      <base-button to="/import-wallet">Import</base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss">
.welcome {
  @apply flex flex-col justify-between;
  &__hero {
  }
}
</style>
