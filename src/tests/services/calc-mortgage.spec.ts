import { describe, expect, it } from 'vitest'

import { calcMortgage } from '@/services'
import {
  inputAnMortgage,
  inputDifMortgage,
  outputAnMortgage,
  outputDifMortgage,
} from '@/tests/fixtures'

describe('calcMortgage', () => {
  it('should calculate correct mortgage with "AN" type', () => {
    const result = calcMortgage(inputAnMortgage)

    expect(result).toStrictEqual(outputAnMortgage)
  })
})

describe('calcMortgage', () => {
  it('should calculate correct mortgage with "DIF" type', () => {
    const result = calcMortgage(inputDifMortgage)

    expect(result).toStrictEqual(outputDifMortgage)
  })
})
