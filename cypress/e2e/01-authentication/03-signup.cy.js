/// <reference types="cypress" />
const dayjs = require('dayjs')
const timeID = dayjs().format('DD.MM.YYYY.mm.ss')


describe('Signup test suites', () => {
    beforeEach(() => {
        cy.visit('/register')
    })

    it('User can sign up with valid user data', () => {
        cy.fixture("user-data.json").then((user) => {
            cy.typeToInput('input[name="englishGivenName"]', user.givenName)
            cy.typeToInput('input[name="englishSurname"]', user.sureName)
            cy.typeToInput('input[name="companyName"]', user.company)
            cy.typeToInput('input[name="email"]', `john.doe${timeID}@gmail.com`)
            cy.typeToInput('input[type="tel"]', user.phone)
            cy.clickElement('[id="inlineCssCheckbox1"]')
            cy.clickButton('Get early access')
            cy.verifyPageContent("Hey! You're on the waitlist.")
            cy.verifyPageContent("Thanks for joining the Yicom waitlist.  We'll be sure to send you an invitation via email soon.")            
        })

    })

    it('Verify validation email that already registered', () => {
        cy.fixture("user-data.json").then((user) => {
            cy.typeToInput('input[name="englishGivenName"]', user.givenName)
            cy.typeToInput('input[name="englishSurname"]', user.sureName)
            cy.typeToInput('input[name="companyName"]', user.company)
            cy.typeToInput('input[name="email"]', user.email)
            cy.typeToInput('input[type="tel"]', user.phone)
            cy.clickElement('[id="inlineCssCheckbox1"]')
            cy.clickButton('Get early access')
            cy.verifyPageContent("An account with same email address already exists!")
        })
    })
})