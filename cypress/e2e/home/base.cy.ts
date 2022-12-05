/// <reference types="cypress" />

describe("first time user navigating to the home page", () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it("displays welcoming header by default", () => {
        cy.get('[data-testid="welcome-header"]')
          .invoke('text')  
          .should('have.length.at.least', 1);
    });

    it("displays welcoming text by default", () => {
        cy.get('[data-testid="welcome-text"]')
          .invoke('text')  
          .should('have.length.at.least', 1);
    });

    context("shows a button to start a new workout program by default", () => {
        it("contains guiding text", () => {
            cy.get('[data-testid="welcome-start-program"]')
              .should('contain.text', "Start a new workout program")
        });
    
        it("navigates to workout programs when clicked", () => {
            cy.get('[data-testid="welcome-start-program"]')
              .click();

            cy.location('pathname').should('include', 'workouts');
        });
    });
});

export {}