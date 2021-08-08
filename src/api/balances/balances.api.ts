import httpClient from './httpClient'

export const getAllowancesAndBalances = (address: string) => {
  return httpClient.get(
    `/allowancesAndBalances/0x11111112542d85b3ef69ae05771c2dccff4faa26/${address}?tokensFetchType=customAndLpTokens`
  )
}
