'use strict';

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
 
function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

function setDay(date) {
    var dd = date.getDate();
    var mm = date.getMonth() ;
    var yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    date = dd + '/' + mm + '/' + yyyy;
    return date;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


