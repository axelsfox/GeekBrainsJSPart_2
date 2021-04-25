'use strict';
//Урок 2. ООП в JavaScript
//1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.

//const products = [
//    {id: 1, title: 'Notebook', price: 20000},
//    {id: 2, title: 'Mouse', price: 1500},
//    {id: 3, title: 'Keyboard', price: 5000},
//    {id: 4, title: 'Gamepad', price: 4500},
//];
//
//const renderProduct = (title, price) => {
//    return `<div class="product-item">
//                <h3>${title}</h3>
//               <p>${price}</p>
//                <button class="by-btn">Добавить в корзину</button>
//              </div>`;
//}
//const renderProducts = list => {
//    document.querySelector('.products').innerHTML = list.map((item) => renderProduct(item.title, item.price)).join('');
//}
//renderProducts(products);

class ProductList {
    #goods;
    #allProducts;
    #prop;

    constructor(container = '.products') {
        this.container = container;
        this.#goods = [];
        this.#allProducts = [];

        this.#fetchGoods();
        this.#render();
    }

    get property() {
        return this.#prop;
    }

    set property(value) {
        this.#prop = value;
    }

    #fetchGoods() {
        this.#goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    #render() {
        const block = document.querySelector(this.container);

        for (const good of this.#goods) {
            const productObject = new ProductItem(good);
            // console.log(productObject);
            this.#allProducts.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                      <img src="${this.img}" alt="Some img">
                      <div class="desc">
                          <h3>${this.title}</h3>
                          <p>${this.price} \u20bd</p>
                          <button class="buy-btn">Купить</button>
                      </div>
                  </div>`;
    }
}


/*2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.*/



/*3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:

    ### Маленький (50 рублей, 20 калорий).
    ### Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
    ### С сыром (+10 рублей, +20 калорий).
    ### С салатом (+20 рублей, +5 калорий).
    ### С картофелем (+15 рублей, +10 калорий). ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) 
    и полить майонезом (+20 рублей, +5 калорий). ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. 
    Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.*/
class Hamburger {
    constructor(size, stuffing) { ... }
    addTopping(topping) {    // Добавить добавку }
    removeTopping(topping) { // Убрать добавку }
    getToppings(topping) {   // Получить список добавок }
    getSize() {              // Узнать размер гамбургера }
    getStuffing() {          // Узнать начинку гамбургера }
    calculatePrice() {       // Узнать цену }
    calculateCalories() {    // Узнать калорийность }
  }



