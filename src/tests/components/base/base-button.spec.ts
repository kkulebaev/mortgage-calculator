import { type VueWrapper,mount } from '@vue/test-utils'
import { describe, expect,it } from 'vitest'

import { BaseButton } from '@/components'

describe('BaseButton', () => {
  let wrapper: VueWrapper

  const createComponent = (options = {}) => {
    wrapper = mount(BaseButton, options)
  }

  const findButton = () => wrapper.find('button')

  it('should emit event "click" when clicked on it', () => {
    createComponent()
    const button = findButton()

    button.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
