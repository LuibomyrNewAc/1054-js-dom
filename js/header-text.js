// DOM - Documemt Object Model
// document

const greetings = [
    'Hey',
    'Bonjour',
    'Hola',
    'Olá',
    'Namastē',
    'Hallo',
    'Asalaam alaikum',
    'Nǐn hǎo',
    'Nǐ hǎo',
    'Konnichiwa',
    'Shalom aleichem',
    'God dag',
    'Kalimera',
    'Salve',
    'Merhaba',
    'Jambo',
    'Ngiyakwemukela'
];
function randomEI (array) {
    return array[Math.floor(Math.random() * array.length)];
}

// const userName = prompt ('What is your name?')

const title = document.querySelector('.header__title');
title.style.color = 'white';

function updateTitle () {
    title.innerText = randomEI(greetings);
}
setInterval(updateTitle, 2000);