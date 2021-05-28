'use strict';
//Урок 3. Асинхронные запросы

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

//1. Переделайте makeGETRequest() так, чтобы она использовала промисы.

//function makeGETRequest(url, callback) {
//   var xhr;
// 
//   if (window.XMLHttpRequest) {
//     xhr = new XMLHttpRequest();
//    } else if (window.ActiveXObject) { 
//      xhr = new ActiveXObject("Microsoft.XMLHTTP");
//    }
//  
//    xhr.onreadystatechange = function () {
//      if (xhr.readyState === 4) {
//       callback(xhr.responseText);
//      }
//    }
//  
//   xhr.open('GET', url, true);
//    xhr.send();
//  }

function makeGETRequest(url) {
    return new Promise (function (resolve, reject){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload =  () => {
  if (xhr.status === 200) {
    resolve(console.log(xhr.responseText))
} else {
    reject(console.log('Что-то пошло не так'))
} 
   };
      }
        )                
    
};


class CartItem { //товар корзины
        
    constructor(product) {
    this.id = id_product;
    this.title = product_name;
    this.price = price;
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


class Cart { //корзина

    constructor(container ='.btn-cart') {
    this.container = container;
    this.goods = [];
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

//2. Добавьте в соответствующие классы методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины.

//Получение списка товаров корзины.

getCartList(){
        document.querySelector('cart-button').addEventListener('click', () => {
            getRequest(`${API}/getBasket.json`, (data) => {
                this.goods=JSON.parse(data);
                this.render();
            });
                       
        });
    };

    
//Добавление товара в корзину.
    
addToCart(addProduct) {
    let product = {
        id : addProduct.id,
        title :  addProduct.name,
        price : addProduct.price
    };
    this.goods.push(product);
    this.render(); 
};
//удаления товара из корзины

delFromCart(addProduct) {
    let result = this.goods.find(item => item.id == addProduct.id);
    this.goods.splice(this.goods.indexOf(result), 1);
    this.render(); 
}
};


class ProductList { //каталог со всеми товарами
      constructor(container = '.products') {
        this.container = container;
        this._goods = [];
        this._allProducts = [];
        this.fetchGoods();
    }

    //3* Переделайте GoodsList так, чтобы fetchGoods() возвращал промис, а render() вызывался в обработчике этого промиса.  
    
    _fetchGoods() {
            getRequest(`${API}/catalogData.json`, (data) => {
                 this._goods = JSON.parse(data);
                 console.log(this._goods);
                 this._render();
             });
         }

    _render() {
        const block = document.querySelector(this.container);

        for (const good of this.goods) {
            const productObject = new ProductItem(good);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }
    }
   

}

class ProductItem { //отдельный товар в каталоге
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





