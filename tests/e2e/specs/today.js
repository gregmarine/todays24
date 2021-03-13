// https://docs.cypress.io/api/introduction/api.html

describe(`Today's 24 Today tab loads`, () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('ion-content', `Today's 24`)
  })
})
