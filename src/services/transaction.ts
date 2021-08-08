export default function sendTransaction({ web3, tx }) {
  return web3.sendTransaction(tx)
}
