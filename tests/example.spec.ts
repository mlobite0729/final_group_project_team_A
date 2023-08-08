import { test, expect } from '@playwright/test';

test('has logo', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Replace with your actual local development server URL

  // Wait for the logo element to be present on the page.
  const logoElement = await page.waitForSelector('img[alt="Logo"]');
  expect(logoElement).toBeTruthy();
});

test('navigates to Brand Guide page', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Replace with your actual local development server URL

  // Click the "Brand Guide" link.
  await page.click('a[href="/brand_guide"]');

  // Expects the URL to contain "brand_guide".
  await page.waitForURL(/.*brand_guide/);
});


const pages = [
  { url: '/', name: 'Home' },
  { url: '/brand_guide', name: 'Brand Guide' },
  { url: '/marketing_strategy', name: 'Marketing Strategy' },
  { url: '/buyers_persona', name: "Buyer's Persona" },
  { url: '/privacy_policy', name: 'Privacy Policy' },
  { url: '/about', name: 'About' },
  { url: '/blog', name: 'Blog' },
];

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000'); // Replace with your actual local development server URL
});

pages.forEach(({ url, name }) => {
  test(`${name} page`, async ({ page }) => {
    // Navigate to the specific page
    await page.click(`nav a[href="${url}"]`);

    // Wait for the page content to load
    await page.waitForLoadState();

    // Test the presence of the logo
    const logoElement = await page.waitForSelector('img[alt="Logo"]');
    expect(logoElement).toBeTruthy();

    // Test the presence of the navigation links
    const navLinks = await page.$$eval('nav ul li a', (links) => links.map((link) => link.textContent));
    expect(navLinks).toEqual(pages.map((page) => page.name));
    
    // Add specific tests for the content of each page as needed.
  });
});

