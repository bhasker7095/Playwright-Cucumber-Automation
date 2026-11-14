const { test, expect } = require('@playwright/test')
test('date picker', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Datepicker.html')
    const year = '2026'
    const month = 'April'
    const date = '14'
    await page.locator('#datepicker1').click()
    while (true) {
        const currYear = await page.locator('.ui-datepicker-year').textContent()
        const currMonth = await page.locator('.ui-datepicker-month').textContent()
        if(currYear == year && currMonth == month){
            break;
        }
        await page.locator('//span[@class="ui-icon ui-icon-circle-triangle-w"]').click()
    }

     const dates = await page.$$('.ui-state-default')
     for(const dt of dates){
        if(dt.textContent() == date){
            await dt.click()
        }
     }
})