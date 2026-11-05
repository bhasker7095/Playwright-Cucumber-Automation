const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { ProductsPage } = require('../pages/ProductsPage')
//Test -1 
test('Verify products List', async ({ page }) => {
    const loginpage = new LoginPage(page)
    const productspage = new ProductsPage(page)
    await loginpage.navigate()
    await loginpage.enterCredentials('standard_user', 'secret_sauce')
    await loginpage.clickLoginButton()
    await productspage.verifyProductsText()
    const countProducts = await productspage.verifyProductsCount()
    console.log('Number of products: ', countProducts)
    expect(countProducts).toBe(6)
    await productspage.addJacketToCart()
    await expect(productspage.cartBadge).toHaveCount(1)
})
//Test - 2
test('verify logout functionality', async ({ page }) => {
    const loginpage = new LoginPage(page)
    const productspage = new ProductsPage(page)

    await loginpage.navigate()
    await loginpage.enterCredentials('standard_user', 'secret_sauce')
    await loginpage.clickLoginButton()

    await productspage.verifyProductsText()

    await productspage.logoff()

    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await expect(page.getByPlaceholder('Username')).toBeVisible()
    await expect(page.getByPlaceholder('Password')).toBeVisible()
})
//Test - 3
test("verify sorting", async ({ page }) => {
    const loginpage = new LoginPage(page)
    const productspage = new ProductsPage(page)

    await loginpage.navigate()
    await loginpage.enterCredentials('standard_user', 'secret_sauce')
    await loginpage.clickLoginButton()

    await productspage.sorting()
    const price = await page.locator('.inventory_item_price').allTextContents()
    console.log('prices :', price)
    console.log(price[1])
    expect(price).toEqual([
        '$7.99',
        '$9.99',
        '$15.99',
        '$15.99',
        '$29.99',
        '$49.99'
    ])
})
test("verify sorting High to low", async ({ page }) => {
    const loginpage = new LoginPage(page)
    const productspage = new ProductsPage(page)

    await loginpage.navigate()
    await loginpage.enterCredentials('standard_user', 'secret_sauce')
    await loginpage.clickLoginButton()

    await productspage.sortingHightoLow()
    const price = await page.locator('.inventory_item_price').allTextContents()
    console.log('prices :', price)

    expect(price).toEqual([
        '$49.99',
        '$29.99',
        '$15.99',
        '$15.99',
        '$9.99',
        '$7.99',
    ])


})