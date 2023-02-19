const BTN_NEW_FEED = "a[class=\"btn btn-success\"]";

class HomePage {

  // This method is used to mark the favourite feed
  static clickNewFeedButton() {

    cy.get(BTN_NEW_FEED).contains("New Feed").click();
  }

  // This methos is used to navigates to All feed Tab
  static clickAllFeedsButton() {
    cy.contains("All Feeds").click();
  }

  // This methos is used to navigates to My feed Tab
  static clickMyFeedsButton() {
    cy.contains("My Feeds").click();
  }

  // This method is used to mark the favourite feed
  static clickBookMarkedButton() {
    cy.contains("Bookmarked").click();
  }

}

export default HomePage;
