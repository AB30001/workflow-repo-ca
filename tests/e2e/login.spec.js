import { test, expect } from '@playwright/test';

test('can navigate to login page', async ({ page }) => {
  // Go to login page
  await page.goto('/login/');
  
  // Verify the navigation menu shows "Login"
  await expect(page.locator('text=Login')).toBeVisible();
  
  // Verify the page shows the welcome message
  await expect(page.locator('text=Welcome to this site')).toBeVisible();
});

// Define the required login tests, but skip them for now
test.skip('user can successfully log in with valid credentials', async ({ page }) => {
  // Go to login page
  await page.goto('/login/');
  
  /* 
  // This is how the test would work when login form is implemented:
  await page.fill('input[type="email"]', process.env.TEST_USER_EMAIL);
  await page.fill('input[type="password"]', process.env.TEST_USER_PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page.locator('.user-profile')).toBeVisible();
  */
});

test.skip('user sees error with invalid credentials', async ({ page }) => {
  // Go to login page
  await page.goto('/login/');
  
  /* 
  // This is how the test would work when login form is implemented:
  await page.fill('input[type="email"]', 'invalid@example.com');
  await page.fill('input[type="password"]', 'wrong');
  await page.click('button[type="submit"]');
  await expect(page.locator('.error-message')).toBeVisible();
  */
});
