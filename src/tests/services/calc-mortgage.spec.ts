import { describe, expect,it } from 'vitest'

import { calcMortgage } from '@/services'
import { inputValue, outputValue } from '@/tests/fixtures'

describe('calcMortgage', () => {
  it('should calculate correct value', () => {
    const result = calcMortgage(inputValue)

    expect(result).toStrictEqual(outputValue)
  })
})
