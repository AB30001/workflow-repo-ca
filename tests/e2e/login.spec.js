import { test, expect } from '@playwright/test';

test('can navigate to login page', async ({ page }) => {
  // Go to login page
  await page.goto('/login/');
  
  // Verify the navigation menu shows "Login"
  await expect(page.locator('text=Login')).toBeVisible();
  
  // Verify the page shows the welcome message
  await expect(page.locator('text=Welcome to this site')).toBeVisible();
});

test.skip('user can successfully log in with valid credentials', async ({ page }) => {
  // Test would go here once login form is implemented
});

test.skip('user sees error with invalid credentials', async ({ page }) => {
  // Test would go here once login form is implemented
});
