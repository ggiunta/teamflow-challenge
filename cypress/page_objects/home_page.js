var HomePage = function(cy) {
  this.cy = cy

  const searchInput = 'input'
  const submitButton = '#searchbar a'


  this.visit = function () {
    cy.visit('')
  }

  this.search = function (string) {
    cy.get(searchInput).type(string)
  }

  this.submit = function () {
    cy.get(submitButton).click()
  }

  this.selectFirstItemFromSection = function (section) {
    cy.xpath("//div[div/h3[text() = '"+section+"']]/div/div/ul/li").first().click()
  }
};

module.exports = HomePage