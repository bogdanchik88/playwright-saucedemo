import { test as base, Page } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"


type Fixtures = {
    loginPage: LoginPage
    StandardUserPage: Page
}

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await use(loginPage)
    },

    StandardUserPage: async({ page }, use) => {
        const StandardUserPage = new LoginPage(page)
        await StandardUserPage.goto()
        await StandardUserPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!)
        await use(page)
    }
})

export { expect } from '@playwright/test'