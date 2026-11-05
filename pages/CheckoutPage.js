class CheckOutPage {
    constructor(page) {
        this.firstName = page.getByPlaceholder('First Name')
        this.lastName = page.getByPlaceholder('Last Name')
        this.postalCode = page.getByPlaceholder('Zip/Postal Code')
        this.continueButton = page.getByRole('button', {name : 'Continue'})
        this.itemTotal =page.locator('.summary_subtotal_label')
        this.taxValue = page.locator('.summary_tax_label')
        this.total = page.locator('.summary_total_label')
        this.finishButton = page.getByRole('button', {name : 'Finish'})
        this.Thankyou = page.getByText('Thank you for your order!')
    }


    async checkPageInputValues(firstName, lastName, postalCode){
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.postalCode.fill(postalCode)

    }
    async clickContinueButton(){
        await this.continueButton.click()
    }
    async visibleFinishButton(){
        await this.finishButton.waitFor({
            state: 'visible'
        })
    }
    async ClickFinishButton(){
        await this.finishButton.click()
    }
    async verifyOrder(){
        await this.Thankyou.waitFor({
            state : 'visible'
        })
    }

}
module.exports = {CheckOutPage}