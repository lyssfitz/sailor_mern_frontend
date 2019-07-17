describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("It clicks the signup and login links and goes to the correct pages", () => {
    cy.contains('Sign Up').click();
    cy.url().should('include', '/signup');
    cy.visit("/");
    cy.contains('Login').click();
    cy.url().should('include', '/login');
    cy.visit("/");
    cy.contains('Get Started').click();
    cy.url().should('include', '/signup');
  })

  it("Without a token, feed should be inaccessible", () => {
    cy.visit("/feed");
    cy.url().should('eq', 'http://localhost:3001/')
  })
})