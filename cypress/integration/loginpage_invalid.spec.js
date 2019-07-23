describe('Login Form with invalid email', () => {
  it("visits the login page", () => {
    cy.visit("/login");
  })

  it("adds an invalid email ", () => {
    cy.get('input[type=email]').type('loginsdfsdf@test.com')
  })

  it("adds a password", () => {
    cy.get('input[type=password]').type('testpass')
  })

  it("clicks the sign up button", () => {
    cy.get('button').click();
  })

  it("redirects user to login", () => {
    cy.url().should('include', '/login');
  })
})

describe('Login Form with invalid password', () => {
  it("visits the login page", () => {
    cy.visit("/login");
  })

  it("adds an invalid email ", () => {
    cy.get('input[type=email]').type('login@test.com')
  })

  it("adds a password", () => {
    cy.get('input[type=password]').type('testpass1')
  })

  it("clicks the sign up button", () => {
    cy.get('button').click();
  })

  it("redirects user to login", () => {
    cy.url().should('include', '/login');
  })
})

describe('Login Form with blank email', () => {
  it("visits the login page", () => {
    cy.visit("/login");
  })

  it("adds a password", () => {
    cy.get('input[type=password]').type('testpass1')
  })

  it("clicks the sign up button", () => {
    cy.get('button').click();
  })

  it("redirects user to login", () => {
    cy.url().should('include', '/login');
  })
})

describe('Login Form with blank password', () => {
  it("visits the login page", () => {
    cy.visit("/login");
  })

  it("adds an email ", () => {
    cy.get('input[type=email]').type('logsdfin@test.com')
  })

  it("clicks the sign up button", () => {
    cy.get('button').click();
  })

  it("redirects user to login", () => {
    cy.url().should('include', '/login');
  })
})

describe('Login Form with blank email and password', () => {
  it("visits the login page", () => {
    cy.visit("/login");
  })

  it("clicks the sign up button", () => {
    cy.get('button').click();
  })

  it("redirects user to login", () => {
    cy.url().should('include', '/login');
  })
})