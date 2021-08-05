<template class="flex flex-col">
  <div class="relative">
    <custom-token-input-form
      v-if="modalShowStatus"
      class="testModal fixed inset-0 z-50"
      @ModalCloseEvent="closeModal()"
    ></custom-token-input-form>
    <template v-if="!modalShowStatus">
      <div class="flex justify-between items-center">
        <description-form>You Pay</description-form>
      </div>
      <Menu>
        <div
          class="
            relative
            p-2.5
            z-0
            w-full
            border-0 border-solid
            rounded-2xl
            bg-black
          "
        >
          <template class="flex justify-between items-center">
            <label-form class="text-left">
              {{ InputSelectedToken.name }}
            </label-form>
            <label-form class="text-right">
              ~${{ InputSelectedToken.decimals }}
            </label-form>
          </template>
          <template class="flex justify-between items-center">
            <MenuButton>
              <button-form :buttonIcon="InputSelectedToken.logoURI">
                {{ InputSelectedToken.symbol }}
              </button-form>
            </MenuButton>
            <div class="flex items-center p-1.5 border-0 border-solid bg-black">
              <input
                v-modev="TokenAmountInput"
                class="
                  bg-black
                  h-full
                  w-full
                  outline-none
                  text-right text-xl text-word-3
                "
                type="type"
                placeholder="0.0"
              />
            </div>
          </template>
        </div>
        <MenuItems>
          <div
            class="
              absolute
              z-20
              py-2.5
              px-2.5
              top-6
              w-full
              bg-gray-800
              rounded-2xl
              overflow-y-scroll
              h-64
            "
            @scroll="scrollTokens"
          >
            <div class="token__input__items grid gap-y-2 grid-cols-1">
              <template v-if="!modalShowStatus">
                <MenuItem disabled>
                  <search-input-form
                    v-model="tokenForSearch"
                    searchIcon="/input-btn/search"
                    placeholder='Try "Dai"'
                  ></search-input-form>
                </MenuItem>
                <MenuItem v-for="token in renderedTokens" :key="token.address">
                  <ticker-form
                    @click="selectInputToken(token)"
                    :tickerIcon="token.logoURI"
                  >
                    <template v-slot:name> {{ token.name }} </template>
                    <template v-slot:symbol> {{ token.symbol }} </template>
                    <template v-slot:token> test </template>
                    <template v-slot:price> =$ForUSDCPrice </template>
                  </ticker-form>
                </MenuItem>
                <MenuItem
                  v-if="!renderedTokens"
                  disabled
                  class="token__input--unfound__field"
                  as="div"
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
  <div class="relative">
    <custom-token-input-form
      v-if="modalShowStatus"
      class="testModal fixed inset-0 z-50"
      @ModalCloseEvent="closeModal()"
    ></custom-token-input-form>
    <template v-if="!modalShowStatus">
      <div class="flex justify-between items-center">
        <description-form>You Receive</description-form>
      </div>
      <Menu>
        <div
          class="
            relative
            p-2.5
            z-0
            w-full
            border-0 border-solid
            rounded-2xl
            bg-black
          "
        >
          <template class="flex justify-between items-center">
            <label-form class="text-left">
              {{ OutSelectedToken.name }}
            </label-form>
            <label-form class="text-right">
              ~${{ OutSelectedToken.decimals }}
            </label-form>
          </template>
          <template class="flex justify-between items-center">
            <MenuButton>
              <button-form :buttonIcon="OutSelectedToken.logoURI">
                {{ OutSelectedToken.symbol }}
              </button-form>
            </MenuButton>
            <div class="flex items-center p-1.5 border-0 border-solid bg-black">
              <p class="bg-black h-full w-full text-right text-xl text-word-3">
                {{ OutAmount }}
              </p>
            </div>
          </template>
        </div>
        <MenuItems>
          <div
            class="
              absolute
              z-20
              py-2.5
              px-2.5
              top-6
              w-full
              bg-gray-800
              rounded-2xl
              overflow-y-scroll
              h-64
            "
            @scroll="scrollTokens"
          >
            <div class="token__input__items grid gap-y-2 grid-cols-1">
              <template v-if="!modalShowStatus">
                <MenuItem disabled>
                  <search-input-form
                    v-model="tokenForSearch"
                    searchIcon="/input-btn/search"
                    placeholder='Try "Dai"'
                  ></search-input-form>
                </MenuItem>
                <MenuItem v-for="token in renderedTokens" :key="token.address">
                  <ticker-form
                    @click="selectOutToken(token)"
                    :tickerIcon="token.logoURI"
                  >
                    <template v-slot:name> {{ token.name }} </template>
                    <template v-slot:symbol> {{ token.symbol }} </template>
                    <template v-slot:token> ForToken </template>
                    <template v-slot:price> =$ForUSDCPrice </template>
                  </ticker-form>
                </MenuItem>
                <MenuItem
                  v-if="!renderedTokens"
                  disabled
                  class="token__input--unfound__field"
                  as="div"
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
import { defineComponent, ref, computed } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import TickerForm from '../forms/TokenInput/TickerForm.vue'
import SearchInputForm from '../forms/TokenInput/SearchInputForm.vue'
import ButtonForm from '../forms/TokenInput/ButtonForm.vue'
import LabelForm from '../forms/TokenInput/LabelForm.vue'
import DescriptionForm from '../forms/TokenInput/DescriptionForm.vue'
import UnfoundForm from '../forms/TokenInput/UnfoundForm.vue'
import CustomTokenInputForm from '../forms/TokenInput/CustomTokenInputForm.vue'
import { toSendFormated, toShowFormated } from '@/composables/useNumbers'
import { getQuote } from '@/api/quote.api'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'TokenSwapHandler',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    SearchInputForm,
    TickerForm,
    ButtonForm,
    LabelForm,
    DescriptionForm,
    UnfoundForm,
    CustomTokenInputForm
  },
  setup() {
    const store = useStore()
    const tokens = computed(() => store.getters['settings/tokens'])
    //For select and input events
    let InputSelectedToken = ref({
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      logoURI:
        'https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png'
    })
    let OutSelectedToken = ref({
      symbol: '1INCH',
      name: '1INCH Token',
      decimals: 18,
      address: '0x111111111117dc0aa78b770fa6a738034120c302',
      logoURI:
        'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png'
    })

    function selectInputToken(token) {
      InputSelectedToken.value = token
    }
    function selectOutToken(token) {
      OutSelectedToken.value = token
    }

    const tokenAmountInput = ref(1)

    //get prices     ? add debounce and input event request

    // let tokenOutAmount = ref(1)

    // getQuote(
    //   InputSelectedToken.value.address,
    //   OutSelectedToken.value.address,
    //   toSendFormated(tokenAmountInput.value, InputSelectedToken.value.decimals)
    // ).then(
    //   (response) =>
    //     (tokenOutAmount.value = toShowFormated(
    //       response.data.toTokenAmount,
    //       OutSelectedToken.value.decimals
    //     ))
    // )

    //search filtered

    const tokenForSearch = ref('')

    const filteredTokens = computed(() => {
      return tokens.value.filter(
        (el) =>
          el.name.toUpperCase().includes(tokenForSearch.value.toUpperCase()) ||
          el.symbol.toUpperCase().includes(tokenForSearch.value.toUpperCase())
      )
    })
    //dynamic token list download
    const scrollPage = ref(1)

    const endIndex = computed(() => {
      return scrollPage.value + 2
    })

    function scrollTokens() {
      console.log('scroll')
      scrollPage.value = scrollPage.value + 1
      console.log(scrollPage.value)
    }

    const renderedTokens = computed(() => {
      return filteredTokens.value.slice(0, endIndex.value)
    })
    //use modals   ? layout fix
    const modalShowStatus = ref(false)

    function closeModal() {
      modalShowStatus.value = false
    }

    function openModal() {
      modalShowStatus.value = true
    }

    return {
      modalShowStatus,
      tokenForSearch,
      InputSelectedToken,
      OutSelectedToken,
      selectInputToken,
      selectOutToken,
      filteredTokens,
      scrollPage,
      scrollTokens,
      renderedTokens,
      endIndex,
      closeModal,
      openModal,
      tokens,
      tokenAmountInput
    }
  }
})
</script>

<style lang="scss" scoped>
.token__input__items {
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
</style>
