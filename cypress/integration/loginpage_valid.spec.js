describe('Login Form with valid email', () => {
  it("visits the login page", () => {
    cy.visit("/login");
  })

  it("adds a valid email", () => {
    cy.get('input[type=email]').type('user+1@test.com')
  })

  it("adds a password", () => {
    cy.get('input[type=password]').type('usertest')
  })

  it("clicks the sign up button", () => {
    cy.get('button').click();
  })

  it("redirects user to feed", () => {
    cy.url().should('include', '/feed');
  })
})

