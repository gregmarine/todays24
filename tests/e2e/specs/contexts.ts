// https://docs.cypress.io/api/introduction/api.html

describe(`Today's 24 Contexts tab loads`, () => {
  it("visits the app contexts url", () => {
    cy.visit("/tabs/contexts");
    cy.contains("ion-content", `Contexts`);
  });

  it("has context name input", () => {
    cy.visit("/tabs/contexts");
    cy.contains("ion-item", `Context Name`);
  });
});
