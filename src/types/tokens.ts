export interface IToken {
    name: string
    symbol: string
    address: string
    logoURI: string
    decimals: number
  }

export type TokenList = Array<IToken>