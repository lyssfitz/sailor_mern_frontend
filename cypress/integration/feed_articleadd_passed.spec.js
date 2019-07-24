describe('Logs in as an admin user', () => {
  it("visits the login page", () => {
    cy.visit("/login");
  })

  it("adds a valid email", () => {
    cy.get('input[type=email]').type('admin+1@test.com')
  })

  it("adds a password", () => {
    cy.get('input[type=password]').type('admintest')
  })

  it("clicks the sign up button", () => {
    cy.get('button').click();
  })

  it("redirects user to feed", () => {
    cy.url().should('include', '/feed');
  })
})

describe('Adds a new article to the page', () => {
  it("clicks the add article button on feed page", () => {
    cy.contains('Add an Article').click();
  })
// add a new article URL
  it("adds an article url that doesn't already exist on feed page", () => {
    cy.get('input[name=url]').type('https://modus.medium.com/lets-have-better-meetings-92d18c2c8825')
  })


  it("clicks the add article button inside the modal", () => {
    cy.contains('Add Article').click();
  })
// add part of the article title here:
  it("shows the article on the page", () => {
    cy.contains('Better Meetings')
  })
})

