const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')


//Test 1
test('Verify sauce Login Page', async ({ page }) => {
    const loginpage = new LoginPage(page)
    await loginpage.navigate()
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.getByPlaceholder('Username')).toBeVisible()
    await expect(page.getByPlaceholder('Password')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible()
})
//Test 2
test('Verify Sauce Demo Loginpage', async ({ page }) => {
    const loginpage = new LoginPage(page)
    await loginpage.navigate()
    await loginpage.enterCredentials('standard_user', 'secret_sauce')
    await loginpage.clickLoginButton()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page.getByText('Products')).toBeVisible()

})
//test 3
test('Invalid credentials', async ({ page }) => {
    const loginpage = new LoginPage(page)

    await loginpage.navigate()
    await loginpage.enterCredentials('standard_user', 'wrong_password')
    await loginpage.clickLoginButton()

    await expect(page).toHaveURL('https://www.saucedemo.com/')

    await expect(
        page.getByText('Epic sadface: Username and password do not match any user in this service')
    ).toBeVisible()
})
