describe('Signup Form', () => {
  it("visits the signup page", () => {
    cy.visit("/signup");
  })

  it("adds a first name", () => {
    cy.get('input[name=firstName]').type('Test')
  })

  it("adds a last name", () => {
    cy.get('input[name=lastName]').type('User')
  })


  it("adds an email", () => {
    cy.get('input[type=email]').type('login2@test.com')
  })

  it("adds a password", () => {
    cy.get('input[type=password]').type('testpass')
  })

  it("clicks the sign up button", () => {
    cy.get('button').click();
  })

  it("redirects user to feed", () => {
    cy.url().should('include', '/feed');
  })
})