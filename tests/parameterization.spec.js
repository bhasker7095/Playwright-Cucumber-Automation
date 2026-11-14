const { test, expect } = require('@playwright/test')

test('API Testing', async ({ request }) => {
    const data = {
        name : 'Grapes',
        id : 110
    }
    const resposne = await request.post('https://demo.playwright.dev/api-mocking/api/v1/fruits', {data: data})
    const body = resposne.json()
    console.log('Status:', resposne.status())
    console.log('Status Text:', resposne.statusText())
    console.log('Response Body:', body)
    expect(resposne.status()).toBe(405)
})

