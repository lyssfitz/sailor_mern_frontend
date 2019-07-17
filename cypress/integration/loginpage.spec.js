describe('Signup Form', () => {
  it("visits the signup page", () => {
    cy.visit("/signup");
  })

  it("adds an email", () => {
    cy.get('input[type=email]').type('cypress@test.com')
  })

  it("adds a password", () => {
    cy.get('input[type=password]').type('pword')
  })

  it("clicks the sign up button", () => {
    cy.get('button').click();
  })

  it("redirects user to feed", () => {
    cy.url().should('include', '/feed');
  })
})