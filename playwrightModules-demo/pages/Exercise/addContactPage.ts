import { Page, Locator } from "playwright";
import { expect } from "@playwright/test";

export class AddContactPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly addNewContactButton: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly dateOfBirth: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly streetAddress1: Locator;
    readonly streetAddress2: Locator;
    readonly city: Locator;
    readonly postalCode: Locator;
    readonly country: Locator;
    readonly submitButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addNewContactButton = page.getByRole('button', { name: 'Add a New Contact' });
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.dateOfBirth = page.getByPlaceholder('yyyy-MM-dd');
        this.email = page.getByPlaceholder('example@email.com');
        this.phone = page.getByPlaceholder('8005551234');
        this.streetAddress1 = page.getByPlaceholder('Address 1');
        this.streetAddress2 = page.getByPlaceholder('Address 2');
        this.city = page.getByPlaceholder('City');
        this.postalCode = page.getByPlaceholder('Postal Code');
        this.country = page.getByPlaceholder('Country');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async clickAddNewContact() {
        await this.addNewContactButton.click();
    }

    async addNewContact(fName: string, lName: string, dob: string, eMail: string, phoneNumber: string, streetAdd1: string, streetAdd2: string, cityName: string, postCode: string, ctry: string)  {
        await this.firstName.fill(fName);
        await this.lastName.fill(lName);
        await this.dateOfBirth.fill(dob);
        await this.email.fill(eMail);
        await this.phone.fill(phoneNumber);
        await this.streetAddress1.fill(streetAdd1);
        await this.streetAddress2.fill(streetAdd2);
        await this.city.fill(cityName);
        await this.postalCode.fill(postCode);
        await this.country.fill(ctry);
        await this.submitButton.click();
        await this.page.waitForLoadState("networkidle");
    }



}