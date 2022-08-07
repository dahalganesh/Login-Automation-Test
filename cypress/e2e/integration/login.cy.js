/// <reference types="cypress" />

describe("Login form check ", () => {
  beforeEach(() => {
    cy.visit("https://flamboyant-allen-00cf47.netlify.app/login");
  });

  it("it should check for login form", () => {
    cy.get("input[name=email]").type("cypress@gmail.com");
    cy.get("input[name=password]").type("cypress123");
    cy.contains("button", " Login").click({ force: true });
  });

  it("it should check for forget password", () => {
    cy.contains("a", "Forgot Password?").click();
    cy.get("#email").type("cypress@gmail.com");
    cy.contains("button", " Send");
  });

  it("it should check for create new account ", () => {
    cy.contains("p", "Create New account").click();
    cy.get("input[name=name]").type("Cypress");
    cy.get('.mat-radio-group [type="radio"]')
      .check("Male", { force: true })
      .should("be.checked");
    cy.get('input[id="mat-input-0"]').type("2050-4-25").type("{enter}");
    cy.get(".iti__arrow").click();
    cy.contains("li", "Nepal").should("contain", "Nepal").click();
    cy.get('input[id="phone"]').type("9805632145");
    cy.get('input[id="email"]').type("cypress@gmail.com");
    cy.contains("button", " Next").click();
    cy.get("input[name=password]").type("@Cypress123");
    cy.get("input[name=confirmPassword]").type("@Cypress123");
    cy.contains("button", " Sign up ").click();
    // cy.get('').should(($input) => {
    //   const val = parseInt($input.text().replace("+", "").trim(), 10);
    //   expect(val).to.include("977");
    // });
  });
});
