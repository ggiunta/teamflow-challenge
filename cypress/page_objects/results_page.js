var ResultsPage = function(cy) {
  this.cy = cy

  const gyphyResult = '.giphy-grid div a'


  this.assertResultsDisplayed = function (string) {
    cy.contains(string)
    cy.get(gyphyResult).its('length').should('be.gte', 0)
  }
};

module.exports = ResultsPage