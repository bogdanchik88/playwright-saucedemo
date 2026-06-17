import { test as base, Page } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"


type Fixtures = {
    loginPage: LoginPage
    standardUserPage: Page
}

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await use(loginPage)
    },

    standardUserPage: async({ page }, use) => {
        const standardUserPage = new LoginPage(page)
        await standardUserPage.goto()
        await standardUserPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!)
        await use(page)
    }
})

export { expect } from '@playwright/test'