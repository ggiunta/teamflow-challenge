/// <reference types="cypress" />

context('Search', () => {
  it('Basic flow', () => {
    let homePage = new (require('../../page_objects/home_page.js'))(cy)
    let resultsPage = new (require('../../page_objects/results_page.js'))(cy)


    let searchString = 'team'

    homePage.visit()
    homePage.search(searchString)
    homePage.submit()

    resultsPage.assertResultsDisplayed(searchString)
  })
})
