<template>
  <h1>Create Password</h1>
  <base-input
    v-model="password"
    label="Password"
    placeholder="Min. 8 characters"
  ></base-input>
  <base-input
    v-model="passwordConfirm"
    label="Password confirm"
    placeholder="Min. 8 characters"
  ></base-input>

  <base-button @click="nextStep" class="mt-5 w-full"
    >Create Password</base-button
  >
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CreatePasword',
  emits: ['nextStep'],
  setup(_, { emit }) {
    const store = useStore()
    const password = ref('')
    const passwordConfirm = ref('')

    function nextStep() {
      if (
        password.value.length >= 8 &&
        password.value === passwordConfirm.value
      ) {
        store.dispatch('auth/storePassword', password.value)
        emit('nextStep', 2)
      }
    }

    return {
      store,
      password,
      passwordConfirm,
      nextStep
    }
  }
})
</script>

<style></style>
