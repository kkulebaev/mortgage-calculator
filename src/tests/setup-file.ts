import { config, enableAutoUnmount } from '@vue/test-utils'
import { afterEach } from 'vitest'

import { i18n } from '@/plugins/i18n'

enableAutoUnmount(afterEach)

config.global.plugins = [i18n]
