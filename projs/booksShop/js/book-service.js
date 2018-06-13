'use strict';

var BOOKS_KEY = 'booksData'
var gBooks = [];
var giD = 1523;

function createBooks() {
    var books = [];
    books = loadFromStorage(BOOKS_KEY);

    if (!books || books.length === 0) {
        books = [];
        books.push(createBook('Two Kinds of Truth', 100))
        books.push(createBook('How Hard Can It Be?', 80))
        books.push(createBook('Into the Water', 150))
    }
    giD = books[books.length - 1].id;
    gBooks = books;
    saveBooks();
}

function createBook(name, price) {
    return {
        id: createId(giD),
        bookName: name,
        bookPrice: price,
        rate: 0,
        img: "img/book.png"
    }
}

function createId(id) {
    giD = id + 1;
    return giD;
}

function addBook(name, price) {
    if (name !== '' && price > 0) {
        gBooks.push(createBook(name, +price));
        saveBooks();
        return gBooks;
    } else {
        return null;
    }
}
function updateBook(bookId, bookPrice) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId;
    });
    gBooks[bookIdx].bookPrice = bookPrice;
    return gBooks;
    saveBooks();
}

function saveBooks() {
    saveToStorage(BOOKS_KEY, gBooks);
}

function getBooks() {
    var books = loadFromStorage(BOOKS_KEY);
    return books;
}

function getBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId;
    });
    return gBooks[bookIdx];
}

function saveRate(id, num) {
    var book = getBook(id);
    book.rate = num;
    saveBooks();
    return gBooks;
}

function sortBy(sortFilter) {
    var books = gBooks.slice();
    if (sortFilter === 'txt') {
        books = sortBytxt(books);
    }
    else if (sortFilter === 'num') {
        books = sortByNum(books);
    }
    return books;
}

function deleteBook(bookId) {

    for (var i = 0; i < gBooks.length; i++) {
        var currBook = gBooks[i];
        if (currBook.id === bookId) {
            gBooks.splice(i, 1);
            saveBooks();
            return gBooks;
        }
    }

}
