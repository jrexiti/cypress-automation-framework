///  <reference types="Cypress" />

describe("contact form", () => {
  it("should submit the form", () => {
    cy.visit("http://localhost:5173/about");
    cy.get("[data-cy=contact-input-message]").type("Take my money!");
    cy.get("[data-cy=contact-input-name]").type("Mr. Ca$h MoNey");
    cy.get("[data-cy=contact-input-email]").type("soMuchMoney@money.com");
    cy.get("[data-cy=contact-btn-submit]").click();
  });
});
