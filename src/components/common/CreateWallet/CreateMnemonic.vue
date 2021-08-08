<template>
  <main class="create__wallet">
    <section class="text-center grid grid-cols-1 gap-y-2 mb-10">
      <h1 class="text-white font-black text-lg">Your mnemonic phrase</h1>
      <p class="text-sm mx-2.5">
        Write down or copy this phrase in the correct order and keep it in a
        safe place.
      </p>
      <base-warning position="horizontal" name="alert-circle"
        >Never give your recovery phrase to third parties, keep it in a safe
        place!</base-warning
      >
      <WordList :words="mnemonic" />
      <button
        class="
          mx-auto
          text-blue-600
          px-1
          flex
          justify-between
          items-center
          hover:text-blue-500
        "
      >
        <base-icon class="mr-0.5" name="copy"></base-icon>
        Copy
      </button>
    </section>
    <section class="w-full bg-back-9 text-sm">
      <input
        class="custom-checkbox"
        type="checkbox"
        id="creation-agreement"
        v-model="agree"
      />
      <label for="creation-agreement"
        >I understand that if you lose your recovery phrase, you will not be
        able to access my funds</label
      >
      <base-button
        color="blue"
        @click="continueToConfirm"
        :disabled="!agree"
        class="mx-10"
        >Continue</base-button
      >
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { createRandom } from '@/services/account'
import WordList from '@/components/common/WordList.vue'
import BaseButton from '@/components/base/BaseButton.vue'

export default defineComponent({
  name: 'CraeteWallet',
  components: {
    WordList,
    BaseButton
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

<style lang="scss" scoped>
/* для элемента input c type="checkbox" */
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* для элемента label, связанного с .custom-checkbox */
.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

/* создание в label псевдоэлемента before со следующими стилями */
.custom-checkbox + label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  @apply bg-word-4;
}

/* стили при наведении курсора на checkbox */
.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: #b3d7ff;
}

/* стили для активного чекбокса (при нажатии на него) */
.custom-checkbox:not(:disabled):active + label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}

/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox:focus + label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox:focus:not(:checked) + label::before {
  @apply bg-word-4;
}

/* стили для чекбокса, находящегося в состоянии checked */
.custom-checkbox:checked + label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled + label::before {
  @apply bg-word-4;
}
</style>
