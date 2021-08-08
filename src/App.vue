<template>
  <AppHeader />
  <div class="container h-full p-2">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue'
import AppHeader from '@/components/common/App/AppHeader.vue'
import { useStore } from 'vuex'
import useWeb3 from '@/services/web3/useWeb3'
import useRefreshApi from './composables/useRefreshApi'

export default defineComponent({
  components: { AppHeader },
  setup() {
    useRefreshApi()
    const store = useStore()
    const { blockNumber } = useWeb3()

    watch(blockNumber, () => {
      store.dispatch('swap/fetchTokens')
      store.dispatch('swap/fetchMarkets')
      store.dispatch('swap/fetchAllowancesAndBalances')
    })
    console.log('Hello, 1inch!🐴')
  }
})
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100vw;
  min-width: 300px;
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #617ba3;
  overflow: scroll;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
  width: 360px;
  height: 600px;
  @apply font-main bg-back-9;
}
</style>
