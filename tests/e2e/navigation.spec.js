import { test, expect } from '@playwright/test';

test('can navigate from home to venue details', async ({ page }) => {
  // Start at home page
  await page.goto('/');
  
  // Wait for venue list to load
  await page.waitForSelector('.venue-list');
  
  // Click the first venue
  await page.click('.venue-list .venue-item:first-child');
  
  // Verify venue details page
  const heading = await page.locator('h1, h2');
  await expect(heading).toContainText('Venue details');
});
