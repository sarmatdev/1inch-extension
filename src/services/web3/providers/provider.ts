import { ref, Ref } from 'vue'

export abstract class Provider {
  provider: any = null
  account: Ref<string | null> = ref(null)
  chainId: Ref<number | null> = ref(null)
  active: Ref<boolean> = ref(false)
  selectedAccount = ''
  id = 'unknown'

  constructor(selectedAccount: string) {
    this.selectedAccount = selectedAccount || ''
  }
}
