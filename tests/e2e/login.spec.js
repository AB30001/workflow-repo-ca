import { test, expect } from '@playwright/test';

test('can navigate to login page', async ({ page }) => {
  // Go to login page
  await page.goto('/login/');
  
  // Verify the heading shows "Login"
  await expect(page.locator('h1')).toContainText('Login');
});

test('user can successfully log in with valid credentials', async ({ page }) => {
  // Go to login page
  await page.goto('/login/');
  
  // Wait for the login form to be in the DOM (it might be initially hidden)
  await page.waitForSelector('#loginForm', { state: 'attached', timeout: 10000 });
  
  // Fill in credentials (using environment variables)
  await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL || 'sarah.jensen@stud.noroff.no');
  await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD || '12345678');
  
  // Submit the form
  await page.click('button[type="submit"]');
  
  // Wait for possible success message or redirection
  await page.waitForTimeout(2000); // Allow time for the form to process
  
  // Check for successful login (either redirection or success message)
  // This might need to be adjusted based on how the app behaves
  const successElement = await page.locator('#message-container:has-text("success"), .profile-container');
  await expect(successElement).toBeVisible();
});

test('user sees error with invalid credentials', async ({ page }) => {
  // Go to login page
  await page.goto('/login/');
  
  // Wait for the login form to be in the DOM
  await page.waitForSelector('#loginForm', { state: 'attached', timeout: 10000 });
  
  // Fill in invalid credentials
  await page.fill('input[name="email"]', 'invalid@example.com');
  await page.fill('input[name="password"]', 'wrong');
  
  // Submit the form
  await page.click('button[type="submit"]');
  
  // Wait for the error message to appear
  await page.waitForTimeout(2000); // Allow time for the form to process
  
  // Verify error message appears
  const errorElement = await page.locator('#message-container:has-text("error"), .error-message, [role="alert"]');
  await expect(errorElement).toBeVisible();
});
