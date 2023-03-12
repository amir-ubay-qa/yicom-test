// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add("typeToInput", (element, text) => {
    cy.get(element)
        .type(text)
});

Cypress.Commands.add("typeEmail", (email) => {
    cy.get('input[name="email"]')
        .type(email)
        .should("have.value", email);
});

Cypress.Commands.add("typePassword", (password) => {
    cy.get('input[name="password"]')
        .type(password)
        .should("have.value", password);
});

Cypress.Commands.add("clickButton", (name) => {
    cy.get('button')
        .contains(name)
        .click()  
});

Cypress.Commands.add("clickLink", (name) => {
    cy.get('a')
        .contains(name)
        .click()
});

Cypress.Commands.add("clickElement", (element) => {
    cy.get(element)
        .click()
});

Cypress.Commands.add("clickBackButton", () => {
    cy.get('p')
        .contains('Back')
        .click()
});

Cypress.Commands.add("verifyUrl", (name) => {
    cy.url()
        .should('eq', name)
});

Cypress.Commands.add("verifyTitle", (name) => {
    cy.title()
        .should('include', name)
});

Cypress.Commands.add("verifyText", (element, text) => {
    cy.get(element)
        .should('contain', text)
});

Cypress.Commands.add("verifyElementIsVisible", (element) => {
    cy.get(element)
        .should('be.visible')
});

Cypress.Commands.add("verifyElementProperty", (element, key, value) => {
    cy.get(element)
            .should('have.prop', key, value)
});

Cypress.Commands.add("verifyButtonIsVisible", (text) => {
    cy.get('button')
        .contains(text)
        .should('be.visible')
});

Cypress.Commands.add('verifyPageContent', (text) => {
    cy.get('body')
        .should('contain', text)
})











//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
