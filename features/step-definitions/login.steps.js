const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
Given('I open the SauceDemo login page', async function () {
    await this.loginPage.navigate()
});

Given('I enter username {string} and password {string}', async function (username, password) {
   await this.loginPage.enterCredentials(username, password)
})

Given('I click the login button', async function () {
    await this.loginPage.clickLoginButton()
})
Then('I should see {string}', async function (result) {
    if (result === 'Products') {
        await this.page.waitForURL('**/inventory.html')
        await expect(this.productsPage.products).toBeVisible()
    }
    else if (result === 'Error Message') {
        await expect(this.page.locator('[data-test="error"]')).toBeVisible()
    }
})