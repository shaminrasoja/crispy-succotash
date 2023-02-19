import homePage from "../../page-object/home-page";
import loginPage from "../../page-object/login-page";

describe('04.01.01 - Home page verification', () => {

    const accessUrl = Cypress.env("accessUrl"),
        loginUsername = Cypress.env("loginUsername"),
        loginPassword = Cypress.env("loginPassword");

    it('04.01.01.01 - Navigate to All feeds and My feeds', () => {

        cy.userLogin(accessUrl, loginUsername, loginPassword);
        homePage.clickAllFeedsButton();
        homePage.clickMyFeedsButton();
        homePage.clickBookMarkedButton();
        homePage.clickNewFeedButton();

    });

});
