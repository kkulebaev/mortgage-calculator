import { mount, type VueWrapper } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'
import { BaseButton } from '@/components'

describe('BaseButton', () => {
  let wrapper: VueWrapper

  const createComponent = (options = {}) => {
    wrapper = mount(BaseButton, options)
  }

  const findButton = () => wrapper.find('button')

  it('should emit event "click" when clicked on it', async () => {
    createComponent()
    const button = findButton()

    await button.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
