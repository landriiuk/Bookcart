const { loginViaAPI, createUserViaAPI, login } = require("../models/APIhelper");
const { randomUserData } = require("../support/helper");


describe('API', () => {
    it('Create user and login', () => {
        createUserViaAPI(randomUserData)
        loginViaAPI(randomUserData.username, randomUserData.password)
        login();
    })
})