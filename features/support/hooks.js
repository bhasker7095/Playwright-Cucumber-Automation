const { Before, After } = require('@cucumber/cucumber')
const { chromium } = require('@playwright/test')
const { LoginPage } = require('../../pages/LoginPage')
const { ProductsPage } = require('../../pages/ProductsPage')
const { CartPage } = require('../../pages/CartPage')
const { CheckOutPage } = require('../../pages/CheckoutPage')

Before(async function () {
    this.browser = await chromium.launch({ headless: process.env.CI === 'true' })
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()

    // Initialize Page Objects
    this.loginPage = new LoginPage(this.page)
    this.productsPage = new ProductsPage(this.page)
    this.cartPage = new CartPage(this.page)
    this.checkOutPage = new CheckOutPage(this.page)
})

After(async function () {
    await this.context.close()
    await this.browser.close()
})

