<template>
  <div class="header__menu">
    <base-wrapper>
      <base-logo
        @click="$router.push('/')"
        class="cursor-pointer"
        icon="icon-48x48"
      ></base-logo>
      <network-select></network-select>
      <base-icon class="cursor-pointer" icon="/swap-btn/settings"></base-icon>
    </base-wrapper>
  </div>
  <div class="nav">
    <ul class="nav__panel">
      <router-link v-slot="{ isExactActive }" to="/">
        <li
          class="nav__panel--item"
          :class="[
            isExactActive ? 'text-word-3' : 'text-word-5 hover:text-blue-500'
          ]"
        >
          Swap
          <hr
            class="nav__panel--link__line"
            :class="{ hidden: !isExactActive }"
          />
        </li>
      </router-link>
      <router-link v-slot="{ isExactActive }" to="/welcome">
        <li
          class="nav__panel--item"
          :class="[
            isExactActive ? 'text-word-3' : 'text-word-5 hover:text-blue-500'
          ]"
        >
          Wallet
          <hr
            class="nav__panel--link__line"
            :class="{ hidden: !isExactActive }"
          />
        </li>
      </router-link>
    </ul>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import NetworkSelect from './components/common/NetworkSelect.vue'
import useRefreshApi from './composables/useRefreshApi'
// import { getQuote } from '@/api/quote.api'


export default defineComponent({
  components: { NetworkSelect },
  setup() {
    useRefreshApi()
    console.log('Hello, 1inch!🦄')
  }
})
</script>

<style lang="scss">
body {
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

::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
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
  width: 300px;
  height: 600px;
  padding: 10px;
  @apply font-main bg-back-9;
}
.nav__panel {
  @apply flex p-5;
  &--item {
    @apply first:mr-2.5;
  }
  &--link__line {
    @apply border-none text-blue-400 bg-blue-400 h-0.5;
  }
}
</style>
