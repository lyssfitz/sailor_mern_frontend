describe('Successful Login', () => {
  it("visits the login page", () => {
    cy.visit("/login");
  })

  it("adds a valid email", () => {
    cy.get('input[type=email]').type('login@test.com')
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

describe('Successful Logout', () => {
  it("clicks the user profile icon", () => {
    cy.get('.userprofile').click();
  })

  it("clicks logout", () => {
    cy.contains('Logout').click();
  })

  it("redirects user to login", () => {
    cy.url().should('include', '/login');
  })

  it("cannot access feed", () => {
    cy.visit("/feed");
    cy.url().should('include', '/login');
  })
})
