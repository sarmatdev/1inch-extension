<template>
  <div
    @click="modalClose"
    class="modal_container flex justify-center items-center"
  >
    <div @click.stop class="modal flex flex-col rounded-2xl p-2.5 bg-gray-800">
      <div
        class="
          text-xl text-word-3
          flex
          justify-between
          items-center
          mb-5
          mx-2.5
        "
      >
        <span class="token__input--custom__token__input--header__title">
          Add Custom Token
        </span>
        <button @click="modalClose" class="transform rotate-45 p-1">+</button>
      </div>
      <base-warning v-if="hasError" name="alert-warning" position="vertically">
        <span> WARNING!</span>
        <p>
          This token is not whitelisted on app.1inch.io.By adding it as a custom
          token, you confirm that all further interactions with it are at your
          own risk
        </p>
      </base-warning>
      <span class="mx-5 mb-1 mt-5">Token address</span>
      <base-input
        v-model="tokenForSearch"
        class="mb-2.5 mx-5"
        placeholder="0x000..."
      />
      <base-warning v-if="hasError" name="alert-warning" position="horizontal">
        Invalid token address
      </base-warning>
      <base-button color="blue" size="sm" class="mt-6 mx-20">
        <base-icon class="text-white mr-2" name="plus-circle" size="sm" />
        <span> Add Token </span>
      </base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'CustomTokenInputForm',
  setup(_, { emit }) {
    const hasError = ref(true)

    function modalClose() {
      emit('ModalCloseEvent')
    }

    return {
      hasError,
      modalClose
    }
  }
})
</script>

<style lang="scss" scoped>
.modal_container {
  z-index: 99;
  width: 360px;
}
</style>
