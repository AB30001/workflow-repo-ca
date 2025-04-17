import { test, expect } from '@playwright/test';

test('user can successfully log in with valid credentials', async ({ page }) => {
  await page.goto('/login/');
  
  // Fill in the login form
  await page.fill('input[type="email"]', process.env.TEST_USER_EMAIL);
  await page.fill('input[type="password"]', process.env.TEST_USER_PASSWORD);
  
  // Submit the form
  await page.click('button[type="submit"]');
  
  // Wait for navigation and verify we're logged in
  await page.waitForURL('**/profile/**');
  expect(page.url()).toContain('/profile');
});

test('user sees error with invalid credentials', async ({ page }) => {
  await page.goto('/login/');
  
  // Fill in the login form with invalid credentials
  await page.fill('input[type="email"]', 'wrong@example.com');
  await page.fill('input[type="password"]', 'wrongpassword');
  
  // Submit the form
  await page.click('button[type="submit"]');
  
  // Verify error message appears
  const errorMessage = await page.locator('.error-message');
  await expect(errorMessage).toBeVisible();
});
