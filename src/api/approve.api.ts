import httpClient from './httpClient'
const END_POINT = '/approve'

const getApproveCalldata = (tokenAddress: string) => {
  return httpClient.get(`${END_POINT}/calldata?tokenAddress=${tokenAddress}`)
}

export { getApproveCalldata }
