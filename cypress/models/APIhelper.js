import { DATA } from "../support/constants";
import { randomUserData } from "../support/helper";

export let token; 
export let userId; 
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
        userId = response.body.userDetails.userId;
        cy.log(token)
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

export function checkWishList(userId) {
    cy.request({
        method: 'GET',
        url: `https://bookcart.azurewebsites.net/api/Wishlist/${userId}`,
        headers: {
            Authorization: `Bearer ${DATA.User.token}`,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).not.empty
    })
}

export function addBookToWishList(userId, bookId){
    cy.request({
        method: 'POST',
        url: `https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/${userId}/${bookId}`,
        headers: {
            Authorization: `Bearer ${DATA.User.token}`,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).not.empty
    })
}

export function clearWishList(userId){
    cy.request({
        method: 'DELETE',
        url: `https://bookcart.azurewebsites.net/api/Wishlist/${userId}`,
        headers: {
            Authorization: `Bearer ${DATA.User.token}`,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body)
    })
}
