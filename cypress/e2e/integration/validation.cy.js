/// <reference types = "cypress" />

describe("Validation check for login form", () => {
  beforeEach(() => {
    cy.visit("https://flamboyant-allen-00cf47.netlify.app/login");
  });
  it("check for login form validation", () => {
    cy.get("input[name=email]").type("cyp.com");
    cy.get("input[name=password]").type("dfghj");
    cy.contains("button", " Login").click({ force: true });
    cy.get(".invalid-text").contains(" Invalid Input ");
  });
  it("It should check for create form validation", () => {
    cy.contains("p", "Create New account").click();
    cy.contains("button", " Next").click();
    cy.get(".invalid-text").contains(" Name is Required ");
    cy.get(".invalid-text").contains(" Gender is Required ");
    cy.get(".invalid-text").contains(" Date of Birth is Required ");
    cy.get(".invalid-text").contains(" Phone Number is Required");
    cy.get(".invalid-text").contains(" Email is Required ");
    cy.get('input[id="email"]').type("cyvdsl.com");
    cy.get(".invalid-text").contains(" Please Enter Valid Email");
    cy.get('input[id="phone"]').type("2544056321");
    cy.get(".invalid-text").contains(" Please Enter Valid Phone");

  });
});
