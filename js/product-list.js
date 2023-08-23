const products = [
    {
        id: 1,
        name: 'Baby Yoda',
        description: 'Baby Yoda is a character in the Star Wars universe, first appearing in the 2019 Disney+ television series The Mandaloria ',
        price: 100,
        image: 'img/baby-yoda.svg',
    },
    {
        id: 2,
        name: 'Banana',
        description: 'A banana is an alongated, edible fruit - botanically ',
        price: 10,
        image: 'img/banana.svg'
    },
    {
        id: 3,
        name: 'Girl',
        description: 'A girl sticker',
        price: 1,
        image: 'img/girl.svg',
    },
    {
        id: 4,
        name: 'Viking',
        description: 'A viking sticker',
        price: 25,
        image: 'img/viking.svg',
    },
];

function renderProducts(products) {
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = '';
    for (const product of products) {
        productsContainer.innerHTML += 
            <article class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3 class="product-card__h3">Baby Yoda</h3>
            <p class="product-card__description">Lorem ipsum <a href="#">dolor</a> sit amet consectetur, adipisicing
                elit.
                Porro
                fuga autem possimus eveniet facere, non minus magnam obcaecati,
                tenetur recusandae, corporis itaque suscipit. Vero illo nulla
                asperiores laudantium tempore porro!
            </p>
            <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy
                </button>
            </div>
        </article>
        ;
    

}