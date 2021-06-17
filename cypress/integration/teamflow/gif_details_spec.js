/// <reference types="cypress" />

context('Details', () => {
  it('Select first from Trending', () => {
    let homePage = new (require('../../page_objects/home_page.js'))(cy)
    let gifDetailsPage = new (require('../../page_objects/gif_details_page.js'))(cy)


    homePage.visit()
    homePage.selectFirstItemFromSection('Trending')

    gifDetailsPage.isDisplayed()
  })
})
