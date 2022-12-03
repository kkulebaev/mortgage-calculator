import { useColorMode } from '@vueuse/core'

import { COLOR_SCHEME } from '@/helpers'

const STORAGE_KEY = 'color-scheme'

export function useColorScheme() {
  const colorScheme = useColorMode<COLOR_SCHEME>({
    initialValue: COLOR_SCHEME.light,
    storageKey: STORAGE_KEY,
  })

  return { colorScheme }
}
