// Урок 6. Компоненты Vue.js
//1. Вынести поиск в отдельный компонент.

const filtrlist = {
  name: 'userFilter',
  data(){
    return {
      userSeach: ''
    }
},

   template: 
  `<div class="cart">
  <form action="#" class="search-form" @submit.prevent =$parent.filterGoods(userSeach)>
                  <input v-model = "userSeach" type="text" class="search-field">
                  <button class="btn-search" type="submit">
                  <i class="fas fa-search"></i>
                </button>
              </form>
              </div>`

};
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    cartUrl: '/getBasket.json',
    imgCatalog: 'https://via.placeholder.com/150',
    products: [],
    seachProducts:[],
    shoppingCart: [],
    isVisibleCart: false, 
  },

  components: {
    filtrlist,
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

      
    filterGoods(seach){
      let regExp = new RegExp (seach, 'i');
      this.seachProducts = this.products.filter(el => regExp.test(el.product_name));
      
    },
  },
  
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

//2. Вынести корзину в отдельный компонент.

Vue.component('cart-list', {

  props: ['goods', 'img'],
  
  template:
  `<div class="shopping_cart">
   <div class="product-item" v-for="product in goods" :key="product.id_product">
     <img :src="img" alt="Some img">
     <div class="desc">
         <h3>{{product.product_name}}</h3>
         <p>{{product.price}}₽</p>
         <p>Количество: {{product.quantity}}</p>
         <button class="buy-btn">Удалить</button>
         </div>
</div>
</div>`
});

