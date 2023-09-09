import E2eConstants from './constants.js'
import { test, expect } from './fixtures/auth.fixture.js'

test.describe('auth', () => {
  test('should redirect unauthorized user to the login page', async ({
    page
  }) => {
    await page.goto(E2eConstants.origin)
    await expect(page).toHaveURL(E2eConstants.loginUrl)
  })

  test('should warn if creds are incorrect', async ({ page, loginPage }) => {
    await loginPage.populateForm('incorrect', 'password')
    await loginPage.login()
    await expect(page.getByText('Account not found')).toBeVisible()
  })

  test('should warn if form is empty', async ({ page, loginPage }) => {
    await loginPage.login()
    await expect(
      page.getByText('Please enter a username and password')
    ).toBeVisible()
  })

  test('should redirect to home page after successful sign up', async ({
    page,
    loginPage,
    user_creds,
    storage
  }) => {
    await loginPage.populateForm(user_creds.username, user_creds.password)
    await loginPage.signUp()
    const localStorage = await storage.getLocalStorage()
    expect(localStorage).toHaveProperty('quoots-user')
    await expect(page).toHaveURL(E2eConstants.origin)
  })

  test('should redirect to home page after successful login', async ({
    page,
    loginPage,
    account,
    storage
  }) => {
    await loginPage.populateForm(account.username, account.password)
    await loginPage.login()
    const localStorage = await storage.getLocalStorage()
    expect(localStorage).toHaveProperty('quoots-user')
    await expect(page).toHaveURL(E2eConstants.origin)
  })
})
