const { test, expect } = require('@playwright/test')
const testdata = [
    { username: 'student', password: 'Password123', ExpectedResult: 'Success' },
    { username: 'Bhavana', password: 'password', ExpectedResult: 'Fail' },
    { username: 'viaj', password: 'pass', ExpectedResult: 'Fail' }
]
for (let [index, user] of testdata.entries())
    test(`Login test ${index + 1} - ${user.username}`, async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/')
        await page.locator('#username').fill(user.username)
        await page.locator('#password').fill(user.password)
        await page.getByRole('button', { name: 'Submit' }).click()

        if(user.ExpectedResult ==='Success'){
            await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
        }
        else{
            await expect(await page.getByText('Your password is invalid!')).toBeVisible()
        }
    })