///  <reference types="Cypress" />

describe("page navigation", () => {
  it("this is the test case desciption ", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy=header-about-link]").click();
    cy.location("pathname").should("eq", "/about");
    cy.go("back");
    cy.location("pathname").should("eq", "/");
    cy.get("[data-cy=header-home-link]").click();
    cy.location("pathname").should("eq", "/");
  });
});
