/// <reference types="cypress" />

describe("first time user navigating to the workout programs page without any programs", () => {
    beforeEach(() => {
        cy.visit('/programs');
    });

    it("displays no programs header by default", () => {
        cy.get('[data-testid="no-programs-header"]')
          .invoke('text')  
          .should('have.length.at.least', 1);
    });

    it("displays welcoming no programs text by default", () => {
        cy.get('[data-testid="no-programs-text"]')
          .invoke('text')  
          .should('have.length.at.least', 1);
    });

    context("shows a button to create a new workout program", () => {
        it("contains guiding text", () => {
            cy.get('[data-testid="create-program"]')
              .should('contain.text', "Create a new program")
        });
    });
});

export {}