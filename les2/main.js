'use strict';
//Урок 2. ООП в JavaScript
//1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
//Вероятно, потребуется метод для проверки уже добавленных товаров с аналогичным id и свойство с количеством одинаковых товаров (1,2,3 ...)
//Класс для элемента корзины. Формирует блок с id, названием и ценой товара 

class CartItem {
        constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.render();
    }
    
    render() {
        return `<div class="product-item" data-id="${this.id}">
            <div class="desc">
            <h3>${this.title}</h3>
            <p>${this.price} \u20bd</p>
            <button class="del-btn">Удалить</button>
        </div>
    </div>`;
    }
            
};

//пустой класс корзины
class Cart {
    constructor(container ='.btn-cart', good){
        this.container = container;
        this.goods = good;
        this.render();
        this.sum();

    };
    sum() {
        return this.goods.reduce((sum, {price}) => sum + price, 0)
    };


    render() {
        const block = document.querySelector(this.container);
        for (const good of this.goods) {
            const productObject = new CartItem(good);
            block.insertAdjacentHTML('beforeEnd', productObject.render());
        }
        block.insertAdjacentHTML('beforeEnd', `<p>Итого ${this.sum()} рублей</p>`);

};
};


//пока до конца не разобралась с fetch пользовалась этим для проверки
//let goods = [
//    {id: 1, title: 'Notebook', price: 20000},
//    {id: 2, title: 'Mouse', price: 1500},
//    {id: 3, title: 'Keyboard', price: 5000},
//    {id: 4, title: 'Gamepad', price: 4500},
//    ];
//
//new Cart ('.btn-cart', goods);

/*2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
Такого классау нас нет и в материалах урока я его не нашла. Вероятно, имелся в виду ProductList. 
Мне кажется, суммировать цену продуктов нужнее всего в рамках класса корзины. Выше метод добавлен в класс Cart*/



/*3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:

    ### Маленький (50 рублей, 20 калорий).
    ### Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
    ### С сыром (+10 рублей, +20 калорий).
    ### С салатом (+20 рублей, +5 калорий).
    ### С картофелем (+15 рублей, +10 калорий). ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) 
    и полить майонезом (+20 рублей, +5 калорий). ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. 
    Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.*/


class Hamburger {
    constructor(size, stuffing) {
         ... }
    addTopping(topping) {    // Добавить добавку }
    removeTopping(topping) { // Убрать добавку }
    getToppings(topping) {   // Получить список добавок }
    getSize() {              // Узнать размер гамбургера }
    getStuffing() {          // Узнать начинку гамбургера }
    calculatePrice() {       // Узнать цену }
    calculateCalories() {    // Узнать калорийность }
  }



