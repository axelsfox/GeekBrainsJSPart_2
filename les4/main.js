'use strict';
//Урок 4. Регулярные выражения
//1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.

let expStr = (document.getElementById('expText')).textContent;


const regForOne = /\'/g
console.log(expStr.replace(regForOne, '\"'));

//expStr = expStr.replace(/\'/g, '\"');
//console.log(expStr);
//2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

const regForTwo = /\B\'/g;
console.log(expStr.replace(regForTwo, '\"'));


//3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
//a. Имя содержит только буквы.
//b. Телефон имеет вид +7(000)000-0000.
//c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
//d. Текст произвольный.
//e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.


//const sendMess = document.querySelector('.sendMess');
//Напишим регулярные выражения для полей, которые требуют проверки
const nameVal = /[^\sa-zа-яё]/gi; //проверяет есть ли знаки кроме букв и пробелов. test вернет false, если имеются иные символы
const phoneVal = /^(\+7\(\d{3}\)\d{3}\-\d{4})$/;//порядок написания телефона в условиях задан жестко. false, если будет содержать буквы или иметь меньше цифр, чем в шаблоне 
const mailVal = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/; //test вернет true, если мейл имеет вид mail@mail.ru
//вероятно стоит проверять только на заполненность

//let sybmitBtn = sendMess.querySelector('.mes_button');

document.querySelector('.sendMess').addEventListener('submit', function(event) { 
    let fields = document.querySelectorAll('.frame');
for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {fields[i].style.borderColor = '#FF0000';  
    }
  };
if(nameVal.test(document.getElementById('nameFrame').value) == true){
    document.getElementById('nameFrame').insertAdjacentHTML('beforebegin', '<p class = "error">Поле может содержать только буквы</p>');
};
if(phoneVal.test(document.getElementById('phoneFrame').value) != true){
    document.getElementById('phoneFrame').insertAdjacentHTML('beforebegin', '<p class = "error">Телефон должен иметь формат +7(000)000-0000</p>');
};
if(mailVal.test(document.getElementById('mailFrame').value) != true){
    document.getElementById('mailFrame').insertAdjacentHTML('beforebegin', '<p class = "error">Email должен иметь формат mail@mail.ru</p>');
};
}
);

