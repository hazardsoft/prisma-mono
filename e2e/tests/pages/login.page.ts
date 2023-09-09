import type { Page } from '@playwright/test'
import E2eConstants from '../constants'

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto(E2eConstants.loginUrl)
    await this.page.waitForURL(E2eConstants.loginUrl)
  }

  async populateForm(username: string, password: string) {
    await this.page.fill('#username', username)
    await this.page.fill('#password', password)
  }

  async signUp() {
    await this.page.click('#signup')
    await this.page.waitForLoadState('networkidle')
  }

  async login() {
    await this.page.click('#login')
    await this.page.waitForLoadState('networkidle')
  }
}
