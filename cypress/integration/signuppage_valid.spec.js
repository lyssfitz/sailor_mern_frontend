describe('Signup Form', () => {
  it("visits the signup page", () => {
    cy.visit("/signup");
  })

  it("adds a first name", () => {
    cy.get('input[name=firstName]').type('Cypress')
  })

  it("adds a last name", () => {
    cy.get('input[name=lastName]').type('Testing')
  })

// change this to a new email if it already exists in the database
  it("adds an email", () => {
    cy.get('input[type=email]').type('cypress+2@test.com')
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

  it("redirects user to feed", () => {
    cy.url().should('include', '/feed');
  })
})