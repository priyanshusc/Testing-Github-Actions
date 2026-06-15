// tests/register.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Full Stack User Registration Flow', () => {

  test('should display validation error message on screen if password is weak', async ({ page }) => {
    // 1. Navigate to our running server's UI view route
    await page.goto('http://localhost:5000');

    // 2. Select input targets and type mock data profiles
    await page.locator('#email').fill('testuser@gmail.com');
    await page.locator('#password').fill('weak'); // only 4 characters, no digits

    // 3. Fire the click trigger event handler behavior action
    await page.locator('#submitBtn').click();

    // 4. Assert that backend rejection messages pass down to UI text elements cleanly
    const feedbackMessage = page.locator('#message');
    await expect(feedbackMessage).toHaveText('Password does not meet requirements');
    await expect(feedbackMessage).toHaveCSS('color', 'rgb(255, 0, 0)'); // Red
  });

  test('should display visual green success confirmation when password is valid', async ({ page }) => {
    await page.goto('http://localhost:5000');

    await page.locator('#email').fill('perfectuser@gmail.com');
    await page.locator('#password').fill('SecurePassword123'); // passes all logic rules!

    await page.locator('#submitBtn').click();

    const feedbackMessage = page.locator('#message');
    await expect(feedbackMessage).toHaveText('User registered successfully!');
    await expect(feedbackMessage).toHaveCSS('color', 'rgb(0, 128, 0)'); // Green
  });

});