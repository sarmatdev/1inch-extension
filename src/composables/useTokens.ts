import { useStore } from "vuex";


export function priceFor(address: string): any {
    
    const store = useStore()
    const tokens = store.getters['settings/tokens']

    const foudedToken = tokens.address.find(address)

    return{
        foudedToken
    }
  }