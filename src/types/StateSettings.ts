import { TokenList } from './tokens'

export default interface SettingsState {
  selectedNetwork: number
  tokens: TokenList
  FromToken: string | number | any
  ToToken: string | number | any
  TokenAmount: string | number | amy
}
