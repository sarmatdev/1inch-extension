<template>
  <div class="selector">
    <div class="selector__description">
      <description-form>{{ description }}</description-form>
      <description-form>Balance:{{ wallet }}</description-form>
    </div>
    <Menu>
      <div class="selector__header">
        <template class="selector__header--item">
          <label-form>
            {{ selectedTicker.name }}
          </label-form>
          <label-form> ~${{ selectedTicker.price }} </label-form>
        </template>
        <template class="selector__header--item">
          <MenuButton>
            <button-form :icon="`${selectedTicker.icon}`">
              {{ selectedTicker.symbol }}
            </button-form>
          </MenuButton>
          <input-form v-model="token" placeholder="0.0"></input-form>
        </template>
      </div>
      <MenuItems>
        <div class="selector__items">
          <div class="selector__items--container">
            <MenuItem disabled>
              <search-input-form
                v-model="ticker"
                placeholder='Try "Dai"'
              ></search-input-form>
            </MenuItem>
            <MenuItem v-for="ticker in filteredTickers()" :key="ticker.index">
              <ticker-form @click="select(ticker)" :icon="`${ticker.icon}`">
                <template v-slot:name> {{ ticker.name }} </template>
                <template v-slot:symbol> {{ ticker.symbol }} </template>
                <template v-slot:token> {{ ticker.token }} </template>
                <template v-slot:price> =${{ ticker.price }} </template>
              </ticker-form>
            </MenuItem>
          </div>
        </div>
      </MenuItems>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import TickerForm from '../forms/selector/TickerForm.vue'
import SearchInputForm from '../forms/selector/SearchInputForm.vue'
import InputForm from '../forms/selector/InputForm.vue'
import ButtonForm from '../forms/selector/ButtonForm.vue'
import LabelForm from '../forms/selector/LabelForm.vue'
import DescriptionForm from '../forms/selector/DescriptionForm.vue'

export default {
  name: 'BaseSelector',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    SearchInputForm,
    TickerForm,
    InputForm,
    ButtonForm,
    LabelForm,
    DescriptionForm
  },

  data() {
    return {
      token: '',
      ticker: '',
      //=============== Testing data =================
      wallet: '1.0091',
      selectedTicker: {
        index: 0,
        name: 'Etherium',
        symbol: 'ETC',
        token: '00.2',
        price: '33345',
        icon: 'eth'
      },
      tickers: [
        {
          index: 0,
          name: 'Etherium',
          symbol: 'ETC',
          token: '00.2',
          price: '33345',
          icon: 'eth'
        },
        {
          index: 0,
          name: 'Bitcoin',
          symbol: 'BTC',
          token: '00.2',
          price: '33345',
          icon: 'eth'
        },
        {
          index: 1,
          name: 'DogeCoin',
          symbol: 'DOGE',
          token: '1.2',
          price: '12.23',
          icon: 'eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: 'eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: 'eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: 'eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: 'eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: 'eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: 'eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: 'eth'
        },
        {
          index: 2,
          name: 'DAI StaibleCoin',
          symbol: 'DAI',
          token: '23.22',
          price: '3.345',
          icon: 'eth'
        }
      ]
      //=========================================
    }
  },
  props: {
    description: String
  },
  methods: {
    select(ticker) {
      this.selectedTicker = ticker
    },
    filteredTickers() {
      return this.tickers.filter(
        (el) =>
          el.name.toUpperCase().includes(this.ticker.toUpperCase()) ||
          el.symbol.toUpperCase().includes(this.ticker.toUpperCase())
      )
    }
  }
}
</script>

<style lang="scss">
.selector {
  @apply relative;
  &__description {
    @apply flex justify-between items-center;
  }
  &__header {
    @apply relative p-2.5 z-50 w-full border-0 border-solid rounded-2xl bg-black;
    &--item {
      @apply flex
            justify-between
            items-center;
    }
  }
  &__items {
    @apply absolute
          w-full
          top-14
          overflow-y-auto
          z-0
          bg-gray-800
          rounded-2xl
          pt-12
          px-2.5
          h-64;
    &--container {
      @apply grid gap-y-2 grid-cols-1;
    }
    /* Custom Scrollbar */
    &::-webkit-scrollbar {
      @apply w-1;
    }
    &::-webkit-scrollbar-track {
      @apply bg-transparent;
    }
    &::-webkit-scrollbar-thumb {
      @apply bg-gray-500;
    }
  }
}
</style>
