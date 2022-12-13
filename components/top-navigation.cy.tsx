import TopNavigation from "./top-navigation";

it('mounts', () => {
  cy.mount(<TopNavigation title=""/>);
})

it('takes a title for parameter and displays it', () => {
  const testTitle = "foobar";
  cy.mount(<TopNavigation title={testTitle} />)

  cy.get('[data-testid="title"')
    .should('have.text', testTitle);
});

it('can take an action and display a button for it', () => {
  cy.mount(<TopNavigation title={""} action={cy.stub().as("action.click")} />);

  cy.get('[data-testid="action"').click();
  cy.get("@action.click").should("be.called");
})

it("should not display action button if no action is proviced", () => {
  cy.mount(<TopNavigation title=""/>);
  cy.get('[data-testid="action"').should('not.exist');
});