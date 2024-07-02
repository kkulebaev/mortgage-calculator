import { config, enableAutoUnmount } from '@vue/test-utils'
import { afterEach } from 'vitest'

import { tolgee, VueTolgee } from '@/plugins/tolgee'

enableAutoUnmount(afterEach)

config.global.plugins.push({
  install: app => {
    app.use(VueTolgee, { tolgee })
  },
})
