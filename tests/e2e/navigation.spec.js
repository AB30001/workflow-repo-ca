import { test, expect } from '@playwright/test';

test('home page shows welcome message', async ({ page }) => {
  // Go to home page
  await page.goto('/');
  
  // Verify the page shows welcome message
  await expect(page.locator('text=Welcome to this site')).toBeVisible();
});

// Skip the venue navigation test for now
test.skip('can navigate from home to venue details', async ({ page }) => {
  // To be implemented when venue list/details are available
});

test('user can successfully log in with valid credentials', async ({ page }) => {
  // Go to login page
  await page.goto('/login/');
  
  // Wait for the login form to appear
  await page.waitForSelector('form', { timeout: 5000 });
  
  // Fill in credentials (using environment variables through process.env)
  await page.fill('input[type="email"]', process.env.TEST_USER_EMAIL || 'test.user@stud.noroff.no');
  await page.fill('input[type="password"]', process.env.TEST_USER_PASSWORD || 'test1234');
  
  // Submit the form
  await page.click('button[type="submit"]');
  
  // Wait for navigation (to profile or dashboard)
  await page.waitForNavigation();
  
  // Verify login was successful (look for name in header or profile element)
  const loggedInElement = await page.locator('header, .profile, .user-info');
  await expect(loggedInElement).toBeVisible();
});

test('user sees error with invalid credentials', async ({ page }) => {
  // Go to login page
  await page.goto('/login/');
  
  // Wait for the login form to appear
  await page.waitForSelector('form', { timeout: 5000 });
  
  // Fill in invalid credentials
  await page.fill('input[type="email"]', 'invalid@example.com');
  await page.fill('input[type="password"]', 'wrong');
  
  // Submit the form
  await page.click('button[type="submit"]');
  
  // Verify error message appears
  const errorElement = await page.locator('.error, .error-message, [role="alert"]');
  await expect(errorElement).toBeVisible();
});
