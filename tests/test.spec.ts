import { test, expect } from '../fixtures/base'

test('проверка фикстуры', async({ loginPage, page }) => {
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!)

    await expect(page).toHaveURL(/inventory/)
})