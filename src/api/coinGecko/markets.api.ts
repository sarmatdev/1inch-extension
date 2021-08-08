import coinGeckoClient from './coinGeckoClient'
const END_POINT = '/markets'

const getMarkets = () => {
  return coinGeckoClient.get(
    `${END_POINT}?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  )
}

export { getMarkets }
