<template>
  <div @click="modalClose" class="modal__container">
    <div @click.stop class="modal token__input--custom__token__input">
      <div class="token__input--custom__token__input--header">
        <base-title class="token__input--custom__token__input--header__title">
          Add Custom Token
        </base-title>
        <button
          @click="modalClose"
          class="
            token__input--custom__token__input--header__close
            text-word-5
            transform
            rotate-45
            p-1
          "
        >
          +
        </button>
      </div>
      <base-warning
        v-if="hasError"
        class="token__input--custom__token__input--vertically__warning"
        position="vertically"
      >
        <span> WARNING!</span>
        <p>
          This token is not whitelisted on app.1inch.io.By adding it as a custom
          token, you confirm that all further interactions with it are at your
          own risk
        </p>
      </base-warning>
      <base-title class="token__input--custom__token__input--title"
        >Token address</base-title
      >
      <search-input-form
        class="token__input--custom__token__input--text__field"
        type="text"
        placeholder="0x000..."
      ></search-input-form>
      <base-warning
        v-if="hasError"
        class="token__input--custom__token__input--horizontal__warning"
        position="horizontal"
      >
        <span class="warning__text">Invalid token address</span>
      </base-warning>
      <token-button-form class="token__input--custom__token__input--btn"
        >Add Token</token-button-form
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchInputForm from './SearchInputForm.vue'
import TokenButtonForm from './TokenButtonForm.vue'

export default defineComponent({
  name: 'CustomTokenInputForm',
  components: { SearchInputForm, TokenButtonForm },
  data() {
    return {
      hasError: true
    }
  },
  methods: {
    modalClose() {
      this.$emit('ModalCloseEvent')
    }
  }
})
</script>

<style lang="scss" scoped>
.warning__text {
}
.modal__container {
  @apply flex justify-center items-center;
}
.token__input--custom__token__input {
  z-index: 99;
  width: 250px;
  @apply flex flex-col rounded-2xl p-2.5 bg-gray-800;
  &--title {
    @apply mx-5 mb-1 mt-5;
  }
  &--text__field {
    @apply mb-2.5 mx-5;
  }
  &--btn {
    @apply mt-5 mb-2.5 mx-5;
  }
  &--header {
    @apply text-xl text-word-3 flex justify-between items-center mb-5 mx-2.5;
  }
}
</style>
