import { Page, Locator } from "playwright";
import { expect } from "@playwright/test";

export class EditContactPage {
    readonly page: Page;
    readonly editContactButton: Locator;
    readonly firstNameInput: Locator;
    readonly submitButton: Locator;
    readonly returnToContactListButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.editContactButton = page.getByRole('button', { name: 'Edit Contact' });
        this.firstNameInput = page.getByLabel('First Name:');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.returnToContactListButton = page.getByRole('button', { name: 'Return to Contact List' });
    }

    async clickEditContactButton() {
        await this.editContactButton.click();
    }

    async edit(firstName: string) {
        await this.firstNameInput.fill(firstName);
        await this.submitButton.click();
        await this.page.waitForLoadState("networkidle");
    }

    async clickreturnToContactListButton() {
        await this.returnToContactListButton.click();
    }

}