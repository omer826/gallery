'use strict';

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
 
function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function sortBytxt(arr) {
    arr.sort(function (item1, item2) {
        var bookA = item1.bookName.toUpperCase(); // ignore upper and lowercase
        var bookB = item2.bookName.toUpperCase(); // ignore upper and lowercase
        if (bookA < bookB) {
            return -1;
        }
        if (bookA > bookB) {
            return 1;
        }
        return 0;
    });
    return arr;
}

function sortByNum(arr) {
    arr.sort(function (bookA, bookB) {
        return bookA.bookPrice - bookB.bookPrice;
    });
    return arr;
    
}
