const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')


Given('I am logged in to SauceDemo', async function () {
    await this.loginPage.navigate()
    await this.loginPage.enterCredentials('standard_user', 'secret_sauce')
    await this.loginPage.clickLoginButton()
})
Then('I should see products  heading', async function () {
    await expect(this.productsPage.products).toBeVisible()
})

Then('I should see 6 products', async function () {
    const count = await this.productsPage.verifyProductsCount()
    expect(count).toBe(6)
})
When('I sort the products from low to high', async function () {
    await this.productsPage.sorting()
})
Then('products should be sorted  from low to high', async function () {
    const prices = await this.productsPage.getProductPrices()
    expect(prices).toEqual([...prices].sort((a, b) => a - b))
})

When('I sort products from high to low', async function () {
    await this.productsPage.sortingHightoLow()
})
Then('produts should be sorted from high to low', async function () {
    const prices = await this.productsPage.getProductPrices()
    expect(prices).toEqual([...prices].sort((a, b) => b - a))
})