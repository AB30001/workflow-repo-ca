import { test, expect } from '@playwright/test';

test('can navigate to login page', async ({ page }) => {
  // Go to home page
  await page.goto('/');
  
  // Click on Login link in the navigation
  await page.click('a:text("Login")');
  
  // Verify we're on the login page
  expect(page.url()).toContain('/login');
  
  // Take a screenshot of the login page
  await page.screenshot({ path: 'login-page.png' });
});

// Skip the actual login test since the form doesn't exist yet
test.skip('user can successfully log in with valid credentials', async ({ page }) => {
  // This test would be implemented once the login form exists
});

test('user sees error with invalid credentials', async ({ page }) => {
  // Skip this test for now to focus on the first one
  test.skip();
});
