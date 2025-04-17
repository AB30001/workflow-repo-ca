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

test('user can successfully log in with valid credentials', async ({ page }) => {
  // Go to login page
  await page.goto('/login/');
  
  // Wait for login form to be visible
  await page.waitForSelector('form', { timeout: 5000 });
  
  // Fill the form with credentials from environment variables
  await page.fill('input[type="email"]', process.env.TEST_USER_EMAIL || 'test.user@stud.noroff.no');
  await page.fill('input[type="password"]', process.env.TEST_USER_PASSWORD || 'testPassword123');
  
  // Submit the form
  await page.click('button[type="submit"]');
  
  // Wait for navigation after login (either to home or profile page)
  await page.waitForNavigation({ timeout: 10000 });
  
  // Verify we're logged in by checking for user-specific element
  // This could be a "Logout" button, username display, etc.
  const loggedInElement = page.locator('button:has-text("Logout"), .user-name, .profile');
  await expect(loggedInElement).toBeVisible();
});

test('user sees error with invalid credentials', async ({ page }) => {
  // Go to login page
  await page.goto('/login/');
  
  // Wait for login form to be visible
  await page.waitForSelector('form', { timeout: 5000 });
  
  // Fill the form with invalid credentials
  await page.fill('input[type="email"]', 'invalid@example.com');
  await page.fill('input[type="password"]', 'wrongPassword');
  
  // Submit the form
  await page.click('button[type="submit"]');
  
  // Wait for and verify error message is shown
  // Look for various possible error message elements
  const errorElement = page.locator('.error, .error-message, [role="alert"], .alert');
  await expect(errorElement).toBeVisible({ timeout: 5000 });
});
