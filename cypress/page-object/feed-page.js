const BOOKMARK_FEED = "span[class=\"glyphicon glyphicon-heart-empty\"]";
const TABLE_FEED = "div[class=table-responsive]";
const INPUT_FEED_URL = "#id_feed_url";
const BTN_FEED_SUBMIT = "#submit-id-submit";

class Feed {

    // This method is used to Add New Feed
    static addNewFeed(feedUrl) {
        cy.get(INPUT_FEED_URL).clear().type(feedUrl)
    }

    // This method is used to Click on submit button to add the New Feed
    static clickNewFeedSubmitBtn() {
        cy.get(BTN_FEED_SUBMIT).click()
    }

    // This method is used to mark the favourite feed
    static markFavouriteFeed() {
        cy.get(BOOKMARK_FEED).click()
    }

    // This method is used to verify if the marked favourite feed dispaly in Bookmark page
    static verifyBookmarkedFeed(sourceName) {
        cy.get(TABLE_FEED).find('td').contains(sourceName)
    }

    // This method is used to visit given feed
    static clickOnSpecificFeed(sourceName) {
        cy.get(TABLE_FEED).find('tr').contains(sourceName).click()

    }

    // This method is used to verify feed Added by username
    static userNameFeed() {
        cy.contains('dl dd', 'test')

    }

}

export default Feed;
