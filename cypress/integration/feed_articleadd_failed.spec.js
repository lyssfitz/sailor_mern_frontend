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

describe('Tries to add an article that already exists in feed', () => {
  it("clicks the add article button on feed page", () => {
    cy.contains('Add an Article').click();
  })

  it("adds an article url that already exists", () => {
    cy.get('input[name=url]').type('https://www.healthcareitnews.com/news/asia-pacific/swinburne-and-coviu-partner-provide-real-time-chat-mental-health-support')
  })


  it("clicks the add article button inside the modal", () => {
    cy.contains('Add Article').click();
  })

  it("shows error message", () => {
    cy.contains('Article has already been added')
  })
})

