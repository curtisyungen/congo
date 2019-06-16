import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default {

    getAllBooks: function () {
        return axios.get("/api/books/getAllBooks/");
    },

    getSearchSuggestions: function (bookSearch) {
        return axios.get("/api/books/getSearchSuggestions/" + bookSearch);
    },

    searchForBook: function (userInput) {
        return axios.get("/api/books/searchForBook/" + userInput);
    },

    getAvailableBooks: function () {
        return axios.get("/api/books/getAvailableBooks/");
    },

    getUnavailableBooks: function () {
        return axios.get("/api/books/getUnavailableBooks/");
    },

    getPaperbacks: function () {
        return axios.get("/api/books/getPaperbacks/");
    },

    getHardcovers: function () {
        return axios.get("/api/books/getHardcovers/");
    },

    getSubject: function (subject) {
        return axios.get("/api/books/getSubject/" + subject);
    },

    loginUser: function (email, password) {
        let user = {
            email: email,
            password: password,
        };

        return axios.get("/api/users/loginUser", user);
    },

    createNewUser: function (name, email, password) {
        let user = {
            name: name,
            email: email,
            password: password,
        };

        return axios.post("/api/users/createNewUser", user);
    },

    updateCart: function (email, cart) {
        return axios.put("/api/users/updateCart/" + email, cart);
    },

    findExistingUser: function (email) {
        return axios.get("/api/users/findExistingUser/" + email);
    },

    checkBookAvail: function (book) {
        return axios.get("/api/books/checkBookAvail/" + book.title);
    },

    putBookOnHold: function (book) {
        return axios.put("/api/books/putBookOnHold", book);
    },

    releaseBookFromHold: function (book) {
        return axios.put("/api/books/releaseBookFromHold", book);
    },

    payUsingPayPal: function (total) {
        return axios.post("/api/payPal/payUsingPayPal/" + total);
    },

    successfulPayment: function () {
        return axios.get("/api/payPal/successfulPayment");
    },

    cancelPayment: function () {
        return axios.get("/api/payPal/cancelPayment");
    },

    getBookByTitle: function (title) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
    },
};
