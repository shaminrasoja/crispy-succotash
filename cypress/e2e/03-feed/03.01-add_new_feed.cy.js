import homePage from "../../page-object/home-page";
import feedPage from "../../page-object/feed-page";
import errorPage from "../../page-object/error-msg";
import loginPage from "../../page-object/login-page";

describe('03.01.01 - Logged in user add new feeds and perform its functionalities', () => {

    const accessUrl = Cypress.env("accessUrl"),
        feedUrl1 = Cypress.env("feedUrl1"),
        feedUrl2 = Cypress.env("feedUrl2"),
        feed1SourceName = Cypress.env("feed1SourceName"),
        loginUsername = Cypress.env("loginUsername"),
        loginPassword = Cypress.env("loginPassword");
 
    it('03.01.01.01 - Logged in user add New feed', () => {

        cy.visit(accessUrl);
        cy.userLogin(accessUrl, loginUsername, loginPassword)

        homePage.clickNewFeedButton();
        feedPage.addNewFeed(feedUrl1);
        feedPage.clickNewFeedSubmitBtn();

    });

    it('03.01.01.02 - Logged in user clicks on specific feed and verify details', () => {

        cy.userLogin(accessUrl, loginUsername, loginPassword)
        homePage.clickNewFeedButton();
        feedPage.addNewFeed(feedUrl2);
        feedPage.clickNewFeedSubmitBtn();

        // feedPage.clickOnSpecificFeed(feed1SourceName);
        feedPage.userNameFeed()

    });

    it('03.01.01.03 - Logged in user bookmarked a feed', () => {

        cy.userLogin(accessUrl, loginUsername, loginPassword)
        feedPage.clickOnSpecificFeed(feed1SourceName);
        feedPage.markFavouriteFeed();
        homePage.clickBookMarkedButton();

    });

    it('03.01.01.04 - Logged in user add exsiting feed URL', () => {

        cy.userLogin(accessUrl, loginUsername, loginPassword)
        homePage.clickNewFeedButton();
        feedPage.addNewFeed(feedUrl1);
        feedPage.clickNewFeedSubmitBtn();

        errorPage.verifyFeedUrlExistErrorMsg();

    });

  });
  