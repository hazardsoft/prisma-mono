import type { BrowserContext } from '@playwright/test'
import E2eConstants from '../constants'

export class LocalStorage {
  constructor(private readonly context: BrowserContext) {}

  async getLocalStorage() {
    const storage = await this.context.storageState()
    const origins = storage.origins.filter(
      o => o.origin === E2eConstants.origin
    )
    if (origins.length) {
      return origins.pop()?.localStorage.reduce((acc, cur) => {
        return { ...acc, [cur.name]: cur.value }
      }, {})
    }
    return {}
  }
}
