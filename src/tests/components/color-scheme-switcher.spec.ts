import { mount,type VueWrapper } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import { ColorSchemeSwitcher } from '@/components'

describe('ColorSchemeSwitcher', () => {
  let wrapper: VueWrapper<any>

  const createComponent = () => {
    wrapper = mount(ColorSchemeSwitcher)
  }

  it('should after mounted set to html class "light"', async () => {
    createComponent()

    expect(document.documentElement.outerHTML).toContain('light')
  })

  it('should set to html class "dark" when switcher has dark value', async () => {
    createComponent()
    const inputDark = wrapper.find('input[value="dark"]')

    await inputDark.setValue(true)

    expect(document.documentElement.outerHTML).toContain('dark')
  })

  it('should set to html class "light" when switcher has light value', async () => {
    createComponent()
    const inputLight = wrapper.find('input[value="light"]')

    await inputLight.setValue(true)

    expect(document.documentElement.outerHTML).toContain('light')
  })
})
