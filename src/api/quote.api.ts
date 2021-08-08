import httpClient from './httpClient'
const END_POINT = '/quote'

const getQuote = ({ tokenIn, tokenOut, amount }) => {
  return httpClient.get(
    `${END_POINT}?fromTokenAddress=${tokenIn}&toTokenAddress=${tokenOut}&amount=${amount}`
  )
}

export { getQuote }
