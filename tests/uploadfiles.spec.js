const { test, expect } = require('@playwright/test');

test('Upload Files in the webpage', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/upload');

    await page.getByTestId('file-input')
        .setInputFiles('tests/2506077_Information.pdf');

    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByText('File Uploaded!').first()).toBeVisible()

    await expect(page.locator('#uploaded-files')).toContainText('2506077_Information.pdf')



});