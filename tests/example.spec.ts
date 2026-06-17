import { test, expect } from '@playwright/test';

test('project test', async ({ page }) => {
  await page.goto('/')
});