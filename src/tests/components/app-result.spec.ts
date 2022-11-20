import { shallowMount, type VueWrapper } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'
import { AppResult } from '@/components'

const DEFAULT_PROPS = {
  takeValue: 5000,
  repayValue: 6000,
  overpaymentValue: 1000,
}

describe('AppResult', () => {
  let wrapper: VueWrapper<any>

  const createComponent = (options = { props: DEFAULT_PROPS }) => {
    wrapper = shallowMount(AppResult, options)
  }

  it('should emit event "submitForm" when clicked on submit button', async () => {
    createComponent()
    const button = wrapper.find('button')

    await button.trigger('click')

    expect(wrapper.emitted('submitForm')).toBeTruthy()
  })
})
