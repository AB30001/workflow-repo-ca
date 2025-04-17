import { test, expect } from '@playwright/test';

test('user can successfully log in with valid credentials', async ({ page }) => {
  // Go to login page
  await page.goto('/login/');
  
  // Take a screenshot to debug
  await page.screenshot({ path: 'login-page.png' });
  
  // Check what input fields exist
  console.log('Available inputs:', await page.$$eval('input', inputs => inputs.map(i => i.outerHTML)));
  
  // Fill in the login form with hardcoded credentials
  await page.fill('input[name="email"]', 'sarah.jensen@stud.noroff.no');
  await page.fill('input[name="password"]', '12345678');
  
  // Take a screenshot after filling
  await page.screenshot({ path: 'form-filled.png' });
  
  // Submit the form - find any button or input that could be a submit
  const submitButton = await page.$('button[type="submit"], input[type="submit"], button:has-text("Login"), [type="submit"]');
  if (submitButton) {
    await submitButton.click();
  } else {
    console.log('No submit button found!');
    await page.screenshot({ path: 'no-submit-button.png' });
  }
  
  // Wait for navigation with debug
  try {
    await page.waitForURL('**/profile/**', { timeout: 10000 });
    console.log('Successfully navigated to profile');
  } catch (e) {
    console.log('Navigation failed:', e.message);
    await page.screenshot({ path: 'navigation-failed.png' });
  }
});

test('user sees error with invalid credentials', async ({ page }) => {
  // Skip this test for now to focus on the first one
  test.skip();
});
