describe('Logs in as a user', () => {
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

describe('Navigates to an article that the user hasnt liked yet', () => {
  it("visits the article page", () => {
    cy.visit("/article/5d37edcd4562574fe94b2482");
  })

  it("clicks the heart icon", () => {
    cy.get('#likebutton').click();
  })

  it("clicks the user profile icon", () => {
    cy.get('.userprofile').click();
  })

  it("clicks on profile page", () => {
    cy.contains('View Profile').click();
  })

  it("redirects user to their profile page", () => {
    cy.url().should('include', '/profile');
  })

  it("redirects user to their profile page", () => {
    cy.url().should('include', '/profile');
  })

  it("shows the article on the page", () => {
    cy.contains('Swinburne')
  })
})
