import { it, describe, expect } from 'vitest'
import { calcMortgage } from '@/services'
import {
  inputAnMortgage,
  outputAnMortgage,
  inputDifMortgage,
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
