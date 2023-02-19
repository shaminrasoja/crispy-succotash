const ALERT_INVALID_CREDENTIAL = "div[class=\"alert alert-block alert-danger\"]";
const ERROR_MSG_INVALID_CREDENTIAL = "Please enter a correct username and password. Note that both fields may be case-sensitive.";
const ALERT_ALREADY_EXIST_USERNAME = "span[id=\"error_1_id_username\"]";
const ERROR_MSG_ALREADY_EXIST_USERNAME = "A user with that username already exists.";
const ALERT_ALREADY_EXIST_USERNAME_HINT = "#hint_id_username";
const ERROR_MSG_ALREADY_EXIST_USERNAME_HINT = "Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.";
const ALERT_FEED_URL_EXIST = "#error_1_id_feed_url";
const ERROR_MSG_FEED_URL_EXIST = "Feed with this Feed URL already exists.";

class ErrorMsg {

    // This method is used to verify error message for login with invalid credential
    static verifyInvalidCredentialErrorMsg() {
        cy.get(ALERT_INVALID_CREDENTIAL).invoke("text").then((text) => {
            expect(text.trim()).eq(ERROR_MSG_INVALID_CREDENTIAL);

        });
    };

    // This method is used to Verify error message for the user signup with exsiting username
    static verifySignUpExisitingUserNameErrorMsg() {
        cy.get(ALERT_ALREADY_EXIST_USERNAME).invoke("text").then((text) => {
            expect(text.trim()).eq(ERROR_MSG_ALREADY_EXIST_USERNAME);

        });
        cy.get(ALERT_ALREADY_EXIST_USERNAME_HINT).invoke("text").then((text) => {
            expect(text.trim()).eq(ERROR_MSG_ALREADY_EXIST_USERNAME_HINT);

        });
    };

    // This method is used to verify error message for feed url exist
    static verifyFeedUrlExistErrorMsg() {
        cy.get(ALERT_FEED_URL_EXIST).invoke("text").then((text) => {
            expect(text.trim()).eq(ERROR_MSG_FEED_URL_EXIST);

        });
    };
};

export default ErrorMsg;
