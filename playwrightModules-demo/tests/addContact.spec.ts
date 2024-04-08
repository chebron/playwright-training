import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/Exercise/loginPage';
import { AddContactPage } from '../../pages/Exercise/addContactPage';
import { EditContactPage } from '../../pages/Exercise/editContactPage';

test("Add a new contact and edit contact @ContactList", async ({ page, request }) => {

    const loginPage = new LoginPage(page);
    const addContactPage = new AddContactPage(page);
    const editContactPage = new EditContactPage(page);
    
    await loginPage.navigateToLandingPage();
    await loginPage.login("celina.hebron@ttcglobal.com", "Testing123");
    await addContactPage.clickAddNewContact();
    await addContactPage.addNewContact("FirstName", "LastName", "1990-04-08", "firstlast@test.com", "123456789", "1 Street", "2 Street", "Auckland", "1200", "NZ");
    await expect(page.getByRole('cell', { name: 'FirstName LastName' })).toBeVisible();

    await page.getByRole('cell', { name: 'FirstName LastName' }).click();
    await editContactPage.clickEditContactButton();
    await editContactPage.edit("");
    await editContactPage.edit("EDITED FirstName");
    await editContactPage.clickreturnToContactListButton();
    await expect(page.getByRole('cell', { name: 'EDITED FirstName LastName' })).toBeVisible();

})
