describe('Signup Form invalid input', () => {
  it("visits the signup page", () => {
    cy.visit("/signup");
  })


  it("adds a last name", () => {
    cy.get('input[name=lastName]').type('User')
  })


  it("adds an email", () => {
    cy.get('input[type=email]').type('login2@test.com')
  })

  it("adds a password", () => {
    cy.get('input[name=password]').type('testpass')
  })

  it("confirms a password", () => {
    cy.get('input[name=passwordConfirmation]').type('testpass')
  })


  it("clicks the sign up button", () => {
    cy.get('button').click();
  })

  it("redirects user to signup", () => {
    cy.url().should('include', '/signup');
  })
})