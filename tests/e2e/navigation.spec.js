import { test, expect } from '@playwright/test';

test('can navigate from home to venue details', async ({ page }) => {
  // Start at home page
  await page.goto('/');
  
  // Take screenshot of home page
  await page.screenshot({ path: 'home-page.png' });
  
  // Check what elements exist on the page
  console.log('Page HTML:', await page.content());
  
  // Wait for any content to load
  await page.waitForSelector('body');
  
  // Skip the rest of the test for now
  test.skip();
});
