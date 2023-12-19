import { randomUserData } from "../support/helper";

export  let token; 

export function loginViaAPI(user, pass) { 
    cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl').apiLogin,
        body: {
            username: user,
            password: pass,
        }
    }).then((response) => {
        token = response.body.token;
    })
}

export function createUserViaAPI(userData) {
    cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl').apiCreate,
        body: userData
    })
}

export function login() {
    cy.visit(Cypress.env('baseUrl').ui, {
        onBeforeLoad(contentWindow) {
            contentWindow.window.localStorage.setItem('authToken', token );
        }
    })
    cy.get('[class="mat-focus-indicator mat-menu-trigger mat-button mat-button-base ng-star-inserted"]')
        .should('contain.text', randomUserData.username);
}