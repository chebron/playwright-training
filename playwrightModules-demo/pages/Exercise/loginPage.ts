import { Page, Locator } from "playwright";
import { expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly addNewContactButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Email');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Submit' });
        this.addNewContactButton = page.getByRole('button', { name: 'Add a New Contact' });
    }

    async navigateToLandingPage() {
        await this.page.goto("https://thinking-tester-contact-list.herokuapp.com/login");
        await this.page.context().clearCookies();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState("networkidle");
    }


}