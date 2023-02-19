const INPUT_SIGNUP_USERNAME = "input[name=username]";
const INPUT_SIGNUP_PASSWORD = "#id_password1";
const INPUT_SIGNUP_PASSWORD_CONFIRMATION = "#id_password2";
const BTN_SIGNUP_SUBMIT = "#submit-id-submit";

class SignUp {

    // This method is used to click Sign up button
    static clickSignUpBtn() {

        cy.contains("Sign Up").click({ timeout: 5000 });
    }

    // This method is used to add Sign up Username
    static addSignUpUsername(username) {
        cy.get(INPUT_SIGNUP_USERNAME).clear().type(username);
    }

    // This method is used to add Sign up password
    static addSignupPassword(password) {
        cy.get(INPUT_SIGNUP_PASSWORD).clear().type(password);
    }

    // This method is used to add Sign up password confrimation
    static addSignupPasswordConfirmation(password) {
        cy.get(INPUT_SIGNUP_PASSWORD_CONFIRMATION).clear().type(password);
    }

    // This method is used to click sign up sumbit button
    static clickSignupSubmit() {
        cy.get(BTN_SIGNUP_SUBMIT).click();
    }

}

export default SignUp;
