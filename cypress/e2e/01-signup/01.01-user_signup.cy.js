import signupPage from "../../page-object/signup";
import errorPage from "../../page-object/error-msg";

describe('01.01.01 - User Sign Up to Crispy Succotash Website', () => {

    const accessUrl = Cypress.env("accessUrl"),
        loginUsername = Cypress.env("loginUsername"),
        loginPassword = Cypress.env("loginPassword");

    it('01.01.01.01 - New User sign up for the website with valid credentials', () => {

        cy.visit(accessUrl);
        signupPage.clickSignUpBtn();
        signupPage.addSignUpUsername(loginUsername);
        signupPage.addSignupPassword(loginPassword);
        signupPage.addSignupPasswordConfirmation(loginPassword);
        signupPage.clickSignupSubmit();

    });

    it('01.01.01.02 - New User sign up for the website with already exists credentials', () => {

        cy.visit(accessUrl);
        signupPage.clickSignUpBtn();
        signupPage.addSignUpUsername(loginUsername);
        signupPage.addSignupPassword(loginPassword);
        signupPage.addSignupPasswordConfirmation(loginPassword);
        signupPage.clickSignupSubmit();

        errorPage.verifySignUpExisitingUserNameErrorMsg();

    });

});
