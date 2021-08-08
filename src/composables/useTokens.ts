import { useStore } from 'vuex'
import {RoundedFormat} from '@/composables/useNumbers'

export interface foundedMarket {
  foundedMarket: number
}

export function marketFor(symbol,amount) {
  const store = useStore()
  const markets = store.getters['swap/markets']
  const foundedMarket = markets.find( market => market.symbol === symbol.toLowerCase()).current_price
  const OutValue = RoundedFormat(foundedMarket * amount) 

  return {
    OutValue
  }
}
