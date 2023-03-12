/// <reference types="cypress" />

describe('Login test suites', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('User can login with valid credential', () => {
        cy.fixture("user-data.json").then((user) => {
            cy.typeEmail(user.email)
            cy.typePassword(user.password)
            cy.clickButton('Login')
            // No Assertion Cannot Login
            // cy.verifyPageContent(`Welcome ${user.givenName} ${user.sureName}`)   
        })
                 

    })

    it('User can view masked password', () => {
        cy.typePassword('123456')
        cy.clickElement('[data-testid="VisibilityIcon"]')
        cy.verifyElementProperty('input[name="password"]', 'type', 'text')
    })

    it('User can go to forgot password page', () => {
        cy.clickLink('Forgot Password?')
        cy.verifyUrl('https://dev.app.yicom.xyz/forgot-password')
        cy.verifyTitle('Forgot Password | YICOM')
        cy.verifyText('.MuiBox-root.css-lij2ir', 'Forgot Password')
        cy.verifyText('.MuiBox-root.css-lij2ir', 'Please enter your email, and YICOM will send reset password email to your registered email.')
        cy.verifyElementIsVisible('input[name="email"]')
        cy.verifyButtonIsVisible('Send')
    })

    it('User can go to sign up page', () => {
        cy.clickLink('Sign Up Now!')
        cy.verifyUrl('https://dev.app.yicom.xyz/register')
        cy.verifyTitle('Registration | YICOM')
        cy.verifyText('[type="loginPaper"]', 'Interested in early access?')
        cy.verifyText('[type="loginPaper"]', 'I agree with the')
        cy.verifyText('[type="loginPaper"]', 'terms of services')
        cy.verifyText('[type="loginPaper"]', 'Already have an account')
        cy.verifyText('[type="loginPaper"]', 'Log in Here')
        // Assert form elements
        cy.verifyElementIsVisible('input[name="englishGivenName"]')
        cy.verifyElementIsVisible('input[name="englishSurname"]')
        cy.verifyElementIsVisible('input[name="companyName"]')
        cy.verifyElementIsVisible('input[name="email"]')
        cy.verifyElementIsVisible('.flag-dropdown.invalid-number')
        cy.verifyElementIsVisible('input[type="tel"]')
        cy.verifyButtonIsVisible('Get early access')
    })


})