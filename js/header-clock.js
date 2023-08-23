const clockContainer = document.querySelector('.header__clock');

clockContainer.innerText = new Date().toLocaleDateString('uk-UA');

setInterval (() => {
clockContainer.innerText = new Date().toLocaleDateString('uk-UA');
}, 1000);