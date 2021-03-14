// https://docs.cypress.io/api/introduction/api.html

describe(`Today's 24 Contexts tab loads`, () => {
  it("Visits the app contexts url", () => {
    cy.visit("/tabs/contexts");
    cy.contains("ion-content", `Contexts`);
  });
});
