const { addBookToWishList, checkWishList, clearWishList, loginViaAPI } = require("../models/APIhelper");
const { DATA } = require("../support/constants");

describe('CRUD', () => {
    it('add book to wishlist', () => {
        addBookToWishList(DATA.User.id, DATA.Book.bookID)
    })
    it('check wishlist', () => {
        checkWishList(DATA.User.id);
    })
    it('clear wishlist', () => {
        clearWishList(DATA.User.id);
    })
})