import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private readonly usernameInput: Locator
    private readonly passwordInput: Locator
    private readonly loginButton: Locator
    private readonly messageError: Locator

    constructor(page: Page){
        super(page)

        this.usernameInput = this.page.getByPlaceholder('Username', { exact: true })
        this.passwordInput = this.page.getByPlaceholder('Password', { exact: true })
        this.loginButton = this.page.getByRole('button', { name: 'Login', exact: true })
        this.messageError = this.page.getByRole('heading', { level: 3 })
    }

    async login(username: string, password: string): Promise<void>{
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)

        await this.loginButton.click()
    }

    async checkError(text: string): Promise<void>{
        await expect(this.messageError).toHaveText(text)
    }
}