const{ test, expect} = require('@playwright/test')
test('Book the item', async({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', {name : 'Login'}).click()
    expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    expect(page.getByText('Products')).toBeVisible()
    const countItems = await page.locator('.inventory_item').count()
    console.log('Number of items :', countItems)
    await page.getByRole('button', {name : 'Add to cart'}).nth(0).click()
    await page.waitForTimeout(3000)

    
})