/// <reference types="cypress" />

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

require("cypress-xpath");

const url = "https://www.google.com/";
const firstName = "David";
const lastName = "Andrews";
const mobileNumber = 1234567890;

Given(`user navigates to google page`, () => {
  cy.visit(url);
  cy.wait(4000);
});

When(`user enters a search name`, () => {
  cy.xpath('//textarea[@title="Search"]').click();
  cy.xpath('//textarea[@title="Search"]').type(firstName + lastName);

  cy.wait(4000);
});

When(`user clicks on search`, () => {
  cy.xpath('//input[@value="Google Search"]').eq(1).click();
});
