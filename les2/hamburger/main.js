'use strict';
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


  class Hamburger {
    constructor(size, stuffing) {
        this.burgerName = `${this.size} with ${this.stuffing}`;
        this.size = size;
        this.stuffing = stuffing;
        this.calculatePrice();     
        this.calculateCalories();
    };

    

    getSize(size) {
        getElementbyId
        return this.size
       
    }
    addTopping(topping) {    // Добавить добавку }
    removeTopping(topping) { // Убрать добавку }
    getToppings(topping) {   // Получить список добавок }
// Узнать размер гамбургера }

    getSize() {              
    getStuffing() {          // Узнать начинку гамбургера }
    calculatePrice() {       // Узнать цену }
    calculateCalories() {    // Узнать калорийность }
  }


