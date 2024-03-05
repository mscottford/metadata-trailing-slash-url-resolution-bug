import { test, expect } from '@playwright/test';

test('alternative url --> /feed.xml', async ({ page }) => {
  await page.goto('/');
  
  const pageAlternateHref = await getElementValueIfFound(page, 'link[rel="alternate"]', 'href');
  expect(pageAlternateHref).toBe('https://example.com/feed.xml');
});

test('canonical url --> /404.html', async ({ page }) => {
  await page.goto('/invalid-page');

  const pageCanonicalHref = await getElementValueIfFound(page, 'link[rel="canonical"]', 'href');
  expect(pageCanonicalHref).toBe('https://example.com/404.html');
});

test('opengraph url --> /404.html', async ({ page }) => {
  await page.goto('/invalid-page');

  const pageCanonicalHref = await getElementValueIfFound(page, 'meta[property="og:url"]', 'content');
  expect(pageCanonicalHref).toBe('https://example.com/404.html');
});

async function getElementValueIfFound(page, selector, attribute) {
  try {
    const value = await page.locator(selector).getAttribute(attribute);
    if (value === '') {
      return '<empty>';
    }
    if (value === null) {
      return '<null>';
    }
    return value;
  } catch (e) {
    return '<not-found>';
  }
}
