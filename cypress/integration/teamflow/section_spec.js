/// <reference types="cypress" />

context('Section', () => {
  it('Trending exists', () => {
    let homePage = new (require('../../page_objects/home_page.js'))(cy)

    
    homePage.visit()

    cy.contains('Trending')
  })
})
