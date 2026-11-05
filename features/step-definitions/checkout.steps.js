const { When, Then, Given, DataTable } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')


When('I add the jacket to the cart', async function () {
    await this.productsPage.addJacketToCart()
})
When('I open the cart', async function () {
    await this.productsPage.clickCartIcon()
    await this.cartPage.verifyCartTitle()
})
When('I proceed to checkout', async function () {
    await this.cartPage.clickCheckoutButton()
    await expect(this.checkOutPage.firstName).toBeVisible()
})

When('I enter checkout details', async function (dataTable) {
    const customerDetails = dataTable.rowsHash()
    console.log('First Name:', customerDetails.firstName)
    console.log('Last Name:', customerDetails.lastName)
    console.log('Postal Code:', customerDetails.postalCode)


    await this.checkOutPage.checkPageInputValues(
        customerDetails.firstName,
        customerDetails.lastName,
        customerDetails.postalCode
    )
})

Then('I should reach the checkout overview', async function () {
    await this.checkOutPage.clickContinueButton()
    await this.checkOutPage.visibleFinishButton()
    await expect(this.checkOutPage.finishButton).toBeVisible()
})

When('I add these  products  to the cart', async function (dataTable    ) {
    const products = dataTable.hashes()
    console.log(products)
    for (const product of products) {
        await this.productsPage.addproductToCart(
            product.productName
        )
    }

})

Then('I should see {int} items in the cart', async function (count) {

    await expect(this.productsPage.cartBadge)
        .toHaveText(String(count))
})