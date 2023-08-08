import { test, expect } from '@playwright/test';

test('has logo', async ({ page }) => {
  await page.goto('https://final-group-project-team-a-5761.vercel.app/'); // Replace with your actual local development server URL

  // Wait for the logo element to be present on the page.
  const logoElement = await page.waitForSelector('img[alt="Logo"]');
  expect(logoElement).toBeTruthy();
});

test('navigates to Brand Guide page', async ({ page }) => {
  await page.goto('https://final-group-project-team-a-5761.vercel.app/'); // Replace with your actual local development server URL

  // Click the "Brand Guide" link.
  await page.click('a[href="/brand_guide"]');

  // Expects the URL to contain "brand_guide".
  await page.waitForURL(/.*brand_guide/);
});

test('navigates to home page', async ({ page }) => {
  await page.goto('https://final-group-project-team-a-5761.vercel.app/'); // Replace with your actual local development server URL

  // Click the "Brand Guide" link.
  await page.click('a[href="/"]');

  // Expects the URL to contain "brand_guide".
  await page.waitForURL(/.*/);
});

test('navigates to Marketing Startegy', async ({ page }) => {
  await page.goto('https://final-group-project-team-a-5761.vercel.app/'); // Replace with your actual local development server URL

  await page.click('a[href="/marketing_strategy"]');

  // Expects the URL to contain "brand_guide".
  await page.waitForURL(/.*marketing_strategy/);
});








