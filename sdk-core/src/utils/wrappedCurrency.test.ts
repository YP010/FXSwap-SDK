import { ChainId } from '../constants'
import { ETHER, Token, WETH9 } from '../entities'
import { wrappedCurrency } from './wrappedCurrency'

describe('#wrappedCurrency', () => {
  const token = new Token(ChainId.FXCORE, '0x0000000000000000000000000000000000000001', 18)

  it('wraps ether', () => {
    expect(wrappedCurrency(ETHER, ChainId.DHOBYGHAUT)).toStrictEqual(WETH9[ChainId.DHOBYGHAUT])
  })
  it('does nothing to tokens', () => {
    expect(wrappedCurrency(token, ChainId.FXCORE)).toStrictEqual(token)
  })
  it('throws if different network ', () => {
    expect(() => wrappedCurrency(token, ChainId.DHOBYGHAUT)).toThrow('CHAIN_ID')
  })
})
