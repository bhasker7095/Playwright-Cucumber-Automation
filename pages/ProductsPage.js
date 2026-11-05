class ProductsPage {
    constructor(page) {
        this.page = page
        this.products = page.getByText('Products')
        this.productitems = page.locator('.inventory_item')
        this.sortingDropdown = page.locator('.product_sort_container')
        this.cartIcon = page.locator('.shopping_cart_link')
        this.jacket = page.getByRole('button', { name: 'Add to cart' }).nth(3)
        this.cartBadge = page.locator('.shopping_cart_badge')
        this.menuButton = page.getByRole('button', { name: 'Open Menu' })
        this.logoutLink = page.locator('#logout_sidebar_link')
    }
    async verifyProductsText() {
        await this.products.waitFor({
            state: 'visible'
        })
    }
    async verifyProductsCount() {
        return await this.productitems.count()
    }
    async getProductPrices() {
        const prices = await this.page
            .locator('.inventory_item_price')
            .allTextContents()

        return prices.map(price =>
            Number(price.replace('$', ''))
        )
    }
    async addJacketToCart() {
        await this.jacket.click()
    }
    async addproductToCart(productName) {
        const product = this.page.locator('.inventory_item').filter({ hasText: productName })
        await product.getByRole('button', { name: 'Add to cart' }).click()
    }
    async clickCartIcon() {
        await this.cartIcon.click()
    }

    async logoff() {
        await this.menuButton.click()

        await this.logoutLink.waitFor({
            state: 'visible',
            timeout: 10000
        })

        await this.logoutLink.click()
    }
    async sorting() {
        await this.sortingDropdown.selectOption('lohi')
    }
    async sortingHightoLow() {
        await this.sortingDropdown.selectOption('hilo')
    }
}
module.exports = { ProductsPage }