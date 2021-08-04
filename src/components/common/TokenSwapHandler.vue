<template>
  <div class="token__input">
    <custom-token-input-form
      v-if="modalShowStatus"
      class="testModal fixed inset-0 z-50"
      @ModalCloseEvent="closeModal()"
    ></custom-token-input-form>
    <template v-if="!modalShowStatus">
      <div
        v-if="tokenPassMode === 'input'"
        class="token__input--description__field"
      >
        <description-form>You Pay</description-form>
        <description-form>Balance: {{ wallet }}</description-form>
      </div>
      <div
        v-if="tokenPassMode === 'output'"
        class="token__input--description__field"
      >
        <description-form>You Receive</description-form>
      </div>
      <Menu>
        <div class="token__input__header">
          <template class="token__input__header--item">
            <label-form class="token__input__header--item--name">
              {{ selectedToken.name }}
            </label-form>
            <label-form class="token__input__header--item--price">
              ~${{ selectedToken.decimals }}
            </label-form>
          </template>
          <template class="token__input__header--item">
            <MenuButton>
              <button-form :buttonIcon="selectedToken.logoURI">
                {{ selectedToken.symbol }}
              </button-form>
            </MenuButton>
            <amount-pass-form
              v-if="tokenPassMode === 'input'"
              v-model="amount"
              placeholder="0.0"
              passMode="input"
            ></amount-pass-form>
            <amount-pass-form
              v-if="tokenPassMode === 'output'"
              passMode="output"
              v-model="amount"
            >
              {{ secondToken }}
            </amount-pass-form>
          </template>
        </div>
        <MenuItems>
          <div
            :class="{ 'overflow-y-scroll h-64': filteredTokens().length > 3 }"
            class="token__input__items"
          >
            <div class="token__input__items--container">
              <template v-if="!modalShowStatus">
                <MenuItem disabled>
                  <search-input-form
                    v-model="tokenForSearch"
                    searchIcon="/input-btn/search"
                    placeholder='Try "Dai"'
                  ></search-input-form>
                </MenuItem>
                <MenuItem
                  v-for="token in filteredTokens()"
                  :key="token.address"
                >
                  <ticker-form
                    @click="select(token)"
                    :tickerIcon="token.logoURI"
                  >
                    <template v-slot:name> {{ token.name }} </template>
                    <template v-slot:symbol> {{ token.symbol }} </template>
                    <template v-slot:token> test </template>
                    <template v-slot:price> =${{ token.decimals }} </template>
                  </ticker-form>
                </MenuItem>
                <MenuItem
                  disabled
                  class="token__input--unfound__field"
                  as="div"
                  v-if="!filteredTokens().length"
                >
                  <unfound-form @ModalOpenEvent="openModal()"></unfound-form>
                </MenuItem>
              </template>
            </div>
          </div>
        </MenuItems>
      </Menu>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import TickerForm from '../forms/TokenInput/TickerForm.vue'
import SearchInputForm from '../forms/TokenInput/SearchInputForm.vue'
import AmountPassForm from '../forms/TokenInput/AmountPassForm.vue'
import ButtonForm from '../forms/TokenInput/ButtonForm.vue'
import LabelForm from '../forms/TokenInput/LabelForm.vue'
import DescriptionForm from '../forms/TokenInput/DescriptionForm.vue'
import UnfoundForm from '../forms/TokenInput/UnfoundForm.vue'
import CustomTokenInputForm from '../forms/TokenInput/CustomTokenInputForm.vue'
import { mapGetters, mapActions } from 'vuex'
import BN from 'bignumber.js'
export default defineComponent({
  name: 'TokenSwapHandler',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    SearchInputForm,
    TickerForm,
    AmountPassForm,
    ButtonForm,
    LabelForm,
    DescriptionForm,
    UnfoundForm,
    CustomTokenInputForm
  },
  data() {
    return {
      modalShowStatus: false,
      tokenForSearch: '',
      amount: 0,
      selectedToken: {
        symbol: 'MATIC',
        name: 'MATIC',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI:
          'https://tokens.1inch.exchange/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png'
      },
      //=============== Testing data =================
      secondToken: '0',
      wallet: '1.0091'
      //==============================================
    }
  },
  props: {
    tokenPassMode: {
      type: String,
      default: 'input',
      validator: (value: string) => ['input', 'output'].includes(value)
    }
  },
  watch: {
    selectedToken: {
      immediate: true,
      handler() {
        this.$emit('handleToken', this.selectedToken)
      }
    },
    amount: {
      immediate: true,
      handler() {
        this.$emit('amount', new BN(this.amount).times(`1e${this.decimals}`))
      }
    }
  },
  methods: {
    ...mapActions({
      fetchTokens: 'settings/fetchTokens'
    }),
    select(token) {
      this.selectedToken = token
    },
    filteredTokens() {
      return this.tokens.filter(
        (el) =>
          el.name.includes(this.tokenForSearch) ||
          el.symbol.includes(this.tokenForSearch)
      )
    },
    closeModal() {
      this.modalShowStatus = false
    },
    openModal() {
      this.modalShowStatus = true
    }
  },
  computed: {
    ...mapGetters({
      tokens: 'settings/tokens'
    }),
    decimals() {
      // @ts-ignore
      return this.selectedToken.decimals
    }
  }
})
</script>

<style lang="scss" scoped>
.token__input {
  @apply relative;
  &--description__field {
    @apply flex justify-between items-center;
  }
  &__header {
    @apply relative p-2.5 z-0 w-full border-0 border-solid rounded-2xl bg-black;
    &--item {
      @apply flex
            justify-between
            items-center;
      &--name {
        @apply text-left;
      }
      &--price {
        @apply text-right;
      }
    }
  }
  &__items {
    @apply absolute z-20 py-2.5 px-2.5 top-6 w-full bg-gray-800 rounded-2xl;
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
      @apply bg-gray-500 rounded-sm;
    }
  }
}
</style>
