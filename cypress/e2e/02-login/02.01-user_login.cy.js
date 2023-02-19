import errorPage from "../../page-object/error-msg";
import loginPage from "../../page-object/login-page";

describe('02.01.01 - User Login to Crispy Succotash Website', () => {

    const accessUrl = Cypress.env("accessUrl"),
        loginUsername = Cypress.env("loginUsername"),
        loginPassword = Cypress.env("loginPassword");

    it('02.01.01.01 - User login to the website with valid credentials', () => {

        cy.userLogin(accessUrl, loginUsername, loginPassword);

    });

    it('02.01.01.02 - User login to the website with invalid credentials', () => {

        cy.userLogin(accessUrl, loginUsername, "test");
        errorPage.verifyInvalidCredentialErrorMsg();
        loginPage.clickLoginBtn();
        
    });

});
