'use strict';
/*Урок 1. Современный JavaScript
1. Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
Для имеющихся объектов done. 
2. Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?
С сокращением вроде ок, а вот с знаечниями по умолчанию не ок.( Не разобралась, как это сделать.
3. *Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
map возвращает массив, который получается при вызове renderProduct для элементов исходного массива. Потому результат содержит запятые.
С помощью join массив помещается в строку без разделения.*/

const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
}
const renderProducts = list => {
    document.querySelector('.products').innerHTML = list.map((item) => renderProduct(item.title, item.price)).join('');
}

renderProducts(products);

