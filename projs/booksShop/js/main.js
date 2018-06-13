'use strict';

$(document).ready(function () {
    createBooks();
    var books = getBooks();
    renderBooks(books);
});

function renderBooks(books) {
    var strHtml = `<tr><th>id</th> <th class="clickable" onclick="sortOnclick('txt')">Title</th> <th class="clickable" onclick="sortOnclick('num')">price</th> <th>rate</th>
     <th calss="th-action" colspan="4">Action</th><tr>`;;
    var elBooksTable = document.querySelector('.books');

    books.forEach(function (book) {
        strHtml += `<tr>`;
        strHtml += `<td>
        ${book.id}</td>
        <td> ${book.bookName} </td>
        <td>  ${book.bookPrice} </td>
        <td>  ${book.rate} </td>
        <td><button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="onClickReadBook(${book.id})">Read</button</td>
        <td><button class="btn btn-warning" onclick="readAndUpdateBook(${book.id})">Update</button</td>
        <td><button class="btn btn-danger" onclick="onDeleteBook(${book.id})">Delete</button</td>
        </div>`

        strHtml += `<tr>`;
    });
    elBooksTable.innerHTML = strHtml;
}

function onDeleteBook(bookId) {
    var books = deleteBook(bookId);
    renderBooks(books);
}

function readAndAddNewBook() {
    toggleModal();
    showAddEl();
}

function onclickAdd() {
    var nameInput = $('.add-name').val();
    var priceInput = $('.add-price').val();
    var inputs = addBook(nameInput, priceInput)

    if (!inputs) {
        $('.add-name').val('add faild');
        $('.add-price').val('add faild');
    } else {
        $('.add-name').val('');
        $('.add-price').val('');
        toggleModal();
        renderBooks(inputs);
    }
}

function onclickUpdate(bookId) {
    var priceInput = $('.add-price').val();
    var updates = updateBook(bookId, priceInput);
    $('.add-price').val('');
    toggleModal();

    renderBooks(updates);
}

function readAndUpdateBook(bookId) {

    toggleModal();
    hideAddel();
    $('.update-book').html(`<button 
    onclick="onclickUpdate(${bookId})" class="btn btn-warning btn-update" >
     update book</button>`);
}

//hide add elemnt 
function hideAddel() {
    $('.btn-update').show();
    $('.main-modal > h1').html('Update book');
    $('.add-name').hide();
    $('.inputs > .name').hide();
    $('.add-new').hide();

}
//show add elemnt 
function showAddEl() {
    $('.btn-update').hide();
    $('.main-modal > h1').html('Add new book');
    $('.add-name').show();
    $('.inputs > .name').show();
    $('.add-new').show();
}

function onClickReadBook(bookId) {
    var elModalRead = document.querySelector('.modal-body');

    console.log(elModalRead);
    var book = getBook(bookId);

    var strHtml = `<div class="book-raed">
    <img class="img-fluid"  src="${book.img}"/>
    <div class="book-data">
            <p>Book name: <span> ${book.bookName}</span></p>
            <p>Book id: <span class="book-id"> ${book.id}</span></p>
            <p>Book price: <span> ${book.bookPrice}</span</p>
            <p>Book rate: <span class="book-rate"> ${book.rate}</span</p>
    </div>
</div>`;
    $('.modal-body').html(strHtml);
}

function changeRate(op) {
    var elRateSpan = $('.book-rate');
    var currRate = +elRateSpan.text();
    if (op === '+') {
        if (currRate < 10) {
            elRateSpan.text(currRate += 1);
        }
    } else {
        if (currRate > 0) {
            elRateSpan.text(currRate -= 1);
        }
    }
}

function onSaveRate() {
    var updateRate = $('.book-rate').text();
    var bookId = $('.book-id').text();
    var books = saveRate(+bookId, +updateRate);
    renderBooks(books);
}

function sortOnclick(op) {
    var bookSort = sortBy(op);
    renderBooks(bookSort);
}

function closeModal() {
    toggleModal()
}

function toggleModal() {
    var elModal = document.querySelector('.main-modal');
    var elMain = document.querySelector('.main-content');

    elModal.classList.toggle('collapse');
    elMain.classList.toggle('collapse');
}