import httpClient from './httpClient'
const END_POINT = '/tokens'

const getTokens = () => {
  return httpClient.get(END_POINT)
}

export { getTokens }
