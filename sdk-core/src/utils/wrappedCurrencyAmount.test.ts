import { ChainId } from '../constants'
import { CurrencyAmount, Token, WETH9 } from '../entities'
import { wrappedCurrencyAmount } from './wrappedCurrencyAmount'

describe('#wrappedCurrencyAmount', () => {
  const token = new Token(ChainId.FXCORE, '0x0000000000000000000000000000000000000001', 18)

  it('wraps ether', () => {
    expect(wrappedCurrencyAmount(CurrencyAmount.ether(10), ChainId.DHOBYGHAUT)).toEqual(
      CurrencyAmount.fromRawAmount(WETH9[ChainId.DHOBYGHAUT], 10)
    )
  })
  it('does nothing to tokens', () => {
    expect(wrappedCurrencyAmount(CurrencyAmount.fromRawAmount(token, 10), ChainId.FXCORE)).toEqual(
      CurrencyAmount.fromRawAmount(token, 10)
    )
  })
  it('throws if different network ', () => {
    expect(() => wrappedCurrencyAmount(CurrencyAmount.fromRawAmount(token, 10), ChainId.DHOBYGHAUT)).toThrow('CHAIN_ID')
  })
})
