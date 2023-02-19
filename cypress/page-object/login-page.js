const LOGIN_BUTTON = "ul[class=\"nav navbar-nav navbar-right\"]";
const USERNAME = "#id_username";
const PASSOWRD = "input[name=password]";
const BTN_LOGIN_SUBMIT = "input[class=\"btn btn-success btn-sm\"]";

class Login {

    // This method is used to Click Login Button.
    static clickLoginBtn() {

        cy.get(LOGIN_BUTTON).click();
    }

    // This method is used to add username for login
    static addLoginUserName(username) {
        cy.get(USERNAME).clear().type(username);
        cy.wait(1000);

    }

    // This method is used to add user password for login
    static addLoginPassword(password) {
        cy.get(PASSOWRD).clear().type(password);
        cy.wait(1000);
    }

    // This method is used to click submit button for login
    static clickLoginSubmitBtn() {
        cy.get(BTN_LOGIN_SUBMIT).click();
    }

    // This method is used to do user logout
    static clickLogout() {
        cy.contains("Logout").click();
    }

}

export default Login;
