import { breakpointsTailwind, useBreakpoints as vueUseBreakpoint } from '@vueuse/core'

export function useBreakpoints() {
  const breakpoints = vueUseBreakpoint({
    mobile: breakpointsTailwind.md,
    tablet: breakpointsTailwind.lg,
  })

  const isMobile = breakpoints.smaller('mobile')
  const isTablet = breakpoints.between('mobile', 'tablet')
  const isDesktop = breakpoints.greater('tablet')

  return { isMobile, isTablet, isDesktop }
}
