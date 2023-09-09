import { test as base } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { LoginPage } from '../pages/login.page.js'
import prisma from '../helpers/prisma.js'
import { LocalStorage } from '../helpers/LocalStorage.js'

type AuthFixtures = {
  loginPage: LoginPage
  user_creds: UserDetails
  account: UserDetails
  storage: LocalStorage
}

type UserDetails = {
  username: string
  password: string
}

// const test = base.extend<AuthFixtures>({})

const test = base.extend<AuthFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()

    await use(loginPage)
  },
  // eslint-disable-next-line no-empty-pattern
  user_creds: async ({}, use) => {
    const user: UserDetails = {
      username: faker.internet.userName(),
      password: faker.internet.password()
    }

    await use(user)
    await prisma.user.deleteMany({ where: { username: user.username } })
  },
  account: async ({ browser, user_creds }, use) => {
    const page = await browser.newPage()
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.populateForm(user_creds.username, user_creds.password)
    await loginPage.signUp()
    await page.close()

    await use(user_creds)
  },
  storage: async ({ context }, use) => {
    const localStorage = new LocalStorage(context)

    await use(localStorage)
  }
})

export { test }
export { expect } from '@playwright/test'
