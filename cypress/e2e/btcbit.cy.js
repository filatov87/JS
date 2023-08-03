
let email = '07cobras-troikas@icloud.com';
let password = "seSmac-nydfod-temqy0";
let baseUrl = "https://btcbit.net/sign_in";
// Most common happy scenario - Succesfull login with valid credentials

describe('Succesfull login1', () => {
  it('Succesfull login', () => {
    cy.visit(baseUrl)
    cy.get('input[type="email"]').type(email)
    cy.get('input[type="password"]').type(password)
    cy.get('#sign-in').click()
    cy.contains('Welcome to BTCBIT.NET')
  })
})

// Most common unhappy path - invalid credentials
describe('Invalid credentials - password & email combination', () => {
  it('Invalid password', () => {
    cy.visit(baseUrl)
    cy.get('input[type="email"]').type(email)
    cy.get('input[type="password"]').type('invalid password')
    cy.get('#sign-in').click()
    cy.contains("Invalid email or password. Try clicking 'Forgot Password' if you're having trouble signing in.").should('be.visible')
  })
  it('Invalid email', () =>{ 
    cy.visit(baseUrl)
    cy.get('input[type="email"]').type('wrong@email')
    cy.get('input[type="password"]').type(password)
    cy.get('#sign-in').click()
    cy.contains("Invalid email or password. Try clicking 'Forgot Password' if you're having trouble signing in.").should('be.visible')

  })
  //Missing values - user forgot to provide one of credentials
  //Skipping due to unability to verify native prompt
  // describe('Missing values', () => {
  //   it('Checking if email is provided', () => {
  //     cy.visit(baseUrl)
  //     cy.get('input[type="password"]').type(password)
    
  //     cy.get('#sign-in').click()
  //     cy.contains('Please fill this field').should('be.visible')

  //   })
  // })
})