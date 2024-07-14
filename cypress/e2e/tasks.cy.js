///  <reference types="Cypress" />

describe("task management", () => {
  it("open and close the new task modal", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    cy.get(".backdrop").click({ force: true });
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");
  });
});
describe("crete a new task", () => {
  it("should create a new task", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    cy.get('#title').type("New Task");
    cy.get('#summary').type("New Task Description");
    cy.get('#category').select("urgent");
    cy.contains("Add Task").click();
    cy.get(".task").should("have.length", 1);
  });
});
