import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        browserName: 'chromium',
        headless: false // Run in headed mode to see what's happening
      },
    }
  ],
  webServer: {
    command: 'npx serve -s . -p 3000',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
