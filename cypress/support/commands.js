import loginPage from "../../cypress/page-object/login-page";

/**
 * This method is used to do user Login.
 * username and password are expected as input.
 */
Cypress.Commands.add("userLogin", (host, username, password) => {

    cy.visit(host);
    loginPage.clickLoginBtn();
    loginPage.addLoginUserName(username);
    loginPage.addLoginPassword(password);
    loginPage.clickLoginSubmitBtn();
    cy.wait(1000);

});
