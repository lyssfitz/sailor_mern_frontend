describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("It clicks the signup and login links and goes to the correct pages", () => {
    cy.contains('Sign up').click();
    cy.url().should('include', '/signup');
    cy.visit("/");
    cy.contains('Login').click();
    cy.url().should('include', '/login');
  })
})