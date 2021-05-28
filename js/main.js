// Урок 5. Фреймворк Vue.js
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    seach: '',
    catalogUrl: '/catalogData.json',
    cartUrl: '/getBasket.json',
    imgCatalog: 'https://via.placeholder.com/150',
    products: [],
    seachProducts:[],
    shoppingCart: [],
    isVisibleCart: false, //для корзины
     
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product){
      console.log(product.id_product);
    },
    removeProduct(product){
      console.log(product.id_product);
    },

    //1. Добавить методы и обработчики событий для поля поиска. Создать в объекте данных поле searchLine и привязать к нему содержимое поля ввода. На кнопку «Искать» добавить обработчик клика, вызывающий метод FilterGoods.
    
    filterGoods(){
      let regExp = new RegExp (this.seach, 'i');
      //let somaseach = this.seach;
      //console.log(someseach);
      // console.log(`${regExp} получено`);
      //v-model = "seach"
      this.seachProducts = this.products.filter(el => regExp.test(el.product_name));
    },
  },
  //Добавить корзину. В html-шаблон добавить разметку корзины. Добавить в объект данных поле isVisibleCart, управляющее видимостью корзины.

  beforeCreate() {},
  created() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
          this.seachProducts.push(el);
        }
      });
      this.getJson(`${API + this.cartUrl}`)
      .then(data => {
        for(let el of data.contents){
          this.shoppingCart.push(el);
                  
        }
      });
  },
  beforeMount() {},
  mounted(){},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
});
