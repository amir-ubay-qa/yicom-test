/// <reference types="cypress" />
describe('Forgot password test suites', () => {
    beforeEach(() => {
        cy.visit('/forgot-password')
    })
    it('User can send reset email to valid user', () => {
        cy.typeEmail('john.doe@gmail.com')
        cy.clickButton('Send')
    })
    it('User can go back to login page from forgot password page', () => {
        cy.clickBackButton()
        cy.verifyUrl('https://dev.app.yicom.xyz/login')
        cy.verifyTitle('Login | YICOM')
    })
})