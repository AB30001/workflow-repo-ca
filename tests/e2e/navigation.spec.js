import { test, expect } from '@playwright/test';

test('home page shows "Welcome to this site"', async ({ page }) => {
  // Start at home page
  await page.goto('/');
  
  // Verify the heading contains the correct text
  const heading = await page.locator('h1');
  await expect(heading).toContainText('Welcome to this site');
  
  // Take a screenshot of the home page
  await page.screenshot({ path: 'home-page.png' });
});

// Skip the venue test since venues aren't loaded yet
test.skip('can navigate from home to venue details', async ({ page }) => {
  // This test would be implemented once venues are available
});
