// DOM - Document Object Model
// document

const greetings = [
    'Hello',
    'Привіт',
    'Hola',
    'Bonjour',
    'Ciao',
    'Hallo',
    'Olá',
    'Ahoj',
    'Hei',
    'Salut',
    'Selam',
    'Cześć',
    'Namaste',
    'Sveiki',
    'Merhaba',
    'Здраво',
    'Χαίρετε',
    '你好',
    'こんにちは',
    '안녕하세요',
    'สวัสดีครับ',
    'Xin chào',
    'Salam',
    'Sawubona'
];

function randomEl(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// const userName = prompt('What is your name?');

const title = document.querySelector('.header__title');
title.style.color = 'white';

function updateTitle() {
    title.innerText =  randomEl(greetings);
}

setInterval(updateTitle, 2000);