beforeEach(() => {
  cy.intercept("GET", "**/api/products", {
    fixture: "products.json",
  }).as("getProducts");
  cy.visit("/");
});

it("is expected to see a header", () => {
  cy.get("[data-cy=header]").should("be.visible");
});

it("is expected to display a list with 3 items", () => {
  cy.get("[data-cy=ProductList]").children().should("have.length", 3);
});