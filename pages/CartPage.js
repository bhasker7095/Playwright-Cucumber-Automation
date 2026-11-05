class CartPage {
    constructor(page) {
        this.page = page
        this.youcart = page.getByText('Your Cart')
        this.productTitle = page.locator('.inventory_item_name')
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' })
        this.jacketPrice = page.locator('.inventory_item_price')
        this.removeButton = page.getByRole('button', { name: 'Remove' })
    }

    async verifyCartTitle() {
        await this.youcart.waitFor({
            state: 'visible'
        })
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click()
    }
    async RemoveItem() {
        await this.removeButton.click()
    }


}
module.exports = { CartPage }