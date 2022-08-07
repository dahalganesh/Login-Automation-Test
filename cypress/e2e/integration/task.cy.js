/// <reference types= "cypress"/>
describe("Task page", () => {
  it("it should check for create new task", () => {
    cy.Login();

    cy.get(".ant-btn").contains(" Create new list ").click();
    cy.get("input[name=list]").type("Cypress Task List");
    cy.get(".mat-button-wrapper").contains(" Add List ").click();
    cy.wait(2000);
    cy.contains("button", " Create New Task ").click();
    cy.get("input[name=taskName]").type("Cypress Task");
    cy.get("#mat-select-0").click();
    cy.get(".mat-option-text").eq(1).click();
    cy.get("#mat-select-2").click();
    cy.get(".mat-option-text").eq(1).click();
    // cy.get('input[id="mat-input-0"]').type("2078-4-25").type('{enter}');
    cy.get("#mat-input-2")
      .invoke("val")
      .then((text) => {
        expect("08/05/1999").to.equal(text);
      });
    cy.get("button").contains(" Add Task ").click();
    // cy.get('#mat-input-2').click();
  });
});
