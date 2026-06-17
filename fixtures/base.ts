import { test as base } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { MainPage } from "../pages/MainPage"


type Fixtures = {
    loginPage: LoginPage
    standardUserPage: MainPage
}

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await use(loginPage)
    },

    standardUserPage: async({ page, loginPage }, use) => {
        await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!)
        await use(new MainPage(page))
    }
})

export { expect } from '@playwright/test'