'use strict';

var gProj = [];
var GALERY_KEY = 'galery';

function createprojects() {
    var projects = [
        createPorj('minesweeper',
            'Minesweeper', 'Clear a rectangular board containing hidden "mines" or bombs without detonating any of them',
            'Minesweeper is a single-player puzzle video game',
            'minesweeper',
            ['Mines', 'Flag'], setProjDate(2018, 6, 1)),
        createPorj('PictureGame',
            'In-Picture Game', 'Picks out sentences that accurately describe the pictures',
            'In-Picture Game is a single-player picture game',
            'PictureGame',
            ['Picture', 'Qst'], setProjDate(2018, 5, 28)),
        createPorj('ballBoard',
            'Ball  Board', 'Collect the random balls',
            'Every 5 seconds a new ball is added in a random empty cell',
            'ballBoard',
            ['Balls', 'Board'], setProjDate(2018, 6, 1)),
        createPorj('touchNums',
            'Touch  Nums', 'Touch the numbers,  training your reflexes and peripheral vision',
            'Touch the numbers from 1 to 25 as fast as you can',
            'touchNums',
            ['Number', 'Reflex'], setProjDate(2018, 5, 27), true),
        createPorj('TodosList',
            'Todos List', 'Manage your daliy tasks',
            'This application allows users to keep track of tasks.',
            'TodosList',
            ['Task', 'Todo'], setProjDate(2018, 6, 4)),
        // createPorj('booksShop',
        //     'Books  Shop', 'Manage your books shop online',
        //     'This application give the owner the ability to manage is books',
        //     'booksShop',
        //     ['management', 'Book', 'shop'], setProjDate(2018, 6, 11), true),
            createPorj('VueJSMissBook',
            'Book Management System', 'Manage your books  online',
            'This application give the owner the ability to manage is books',
            'missBook',
            ['management', 'Book', 'vueJs'], setProjDate(2018, 7, 2), true),
        createPorj('guessMe',
            'Guess Me', 'Start to Tech Me More',
            'This application give the user the chance to learn new thing,game with build qestion' +
            ' and option to insert new qestions and answer', 'guessMe',
            ['Thing', 'Geuss', 'Play'], setProjDate(2018, 6, 13), true),
            createPorj('memeGen',
            'Meme Genartor', 'Create your on meme img',
            'This application give the user the chance to create is meme img ,publis or download..', 'memeGen',
            ['Meme', 'facebook'], setProjDate(2018, 6, 25), true), 
            createPorj('WikiTube',
            'Wikipedia youTube', 'Find your searches on youtube and wikipedia',
            'This application give the user the opportunity to search in yuotube and wikipedia together', 
            'WikiTube',
            ['wikipedai', 'youtube','song','knowledge'], setProjDate(2018, 6, 28), true)
    ];
    gProj = projects;
    // Thinging game with qestion ,and option to insert new qestions and answer',
}

function createPorj(id, name, title, desc, url, labels, date, ishere) {
    return {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: `img/portfolio/${url}.png`,
        publishedAt: date,
        labels: labels,
        isProjhHere: ishere || false
    }
}



function setProjDate(year, mon, day) {
    var publishDate = new Date(year, mon, day);
    var setDate = setDay(publishDate);
    return setDate;
}

function getPorj(id) {
    var currProj = gProj.find(function (proj) {
        return (proj.id === id);
    });
    return currProj;
}

function getPorjects() {
    return gProj;
}