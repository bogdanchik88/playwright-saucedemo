import { test, expect } from '../fixtures/base'

test('проверка фикстуры', async({ loginPage, page }) => {
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!)

    await expect(page).toHaveURL(/inventory/)
})

test('проверка что залогиненный юзер сразу на главной', async({ standardUserPage }) => {
    await standardUserPage.expectLoaded()
})