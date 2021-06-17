var GIFDetailsPage = function(cy) {
  this.cy = cy


  this.isDisplayed = function () {
    cy.url().should('include', '/gifs/')
  }
};

module.exports = GIFDetailsPage