///  <reference types="Cypress" />

describe("template spec", () => {
  it("this is the test case desciption ", () => {
    cy.visit("http://localhost:5173/");

    cy.get(".main-header img");
  });

  it("should display the page title", () => {
    cy.visit("http://localhost:5173/");
    cy.get('h1').should('exist');
    cy.get('h1').should('have.length', 1);
    cy.get("h1").contains("My Cypress Course Tasks");
  });
});
