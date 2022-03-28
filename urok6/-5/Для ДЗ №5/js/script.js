// var age = 0;
// while(age < 30){

//     age++;
//     if(age % 2 === 1 || age % 5 === 0){
//         continue;
//     }
//     console.log(`Mne ${age} let`);

// }
//1 создаем элемент и добавляем его
let menu = document.querySelector('.menu');// к какому классу или id будем добавлять
let menuItem = document.querySelectorAll('.menu-item');
let li = document.createElement('li'); //создали элемент
li.classList.add('menu-item');// добавили ему класс со свойствами

menu.appendChild(li);
li.innerHTML = 'Пятый пункт';//добавили текст
// menu.removeChild(menuItem[1]);//удаляем элемент

//2

document.body.style.backgroundImage = "url('img/apple_true.jpg')";// изменили картинку

console.log(li);
//3Поменять заголовок, добавить слово "подлинную"
//( Получится - "Мы продаем только подлинную технику Apple")
let title = document.querySelector('#title');

title.innerHTML = 'Мы продаем только подлинную технику Apple';
title.style.fontSize = '4em';//изменяем размер шрифта

//4 удаляем рекламу

let adv = document.querySelector('.adv');
let columns = document.querySelectorAll('.column');
columns[1].removeChild(adv);//удалили adv

// document.body.removeChild(columns[0]);//удалили 1 column
// let column = document.querySelector('.column');
// columns.removeChild(adv);
 console.log(adv);
 console.log(columns);

 //5 Добавляем ответ  в id prompt
 let question;
 let prom = document.querySelector('#prompt');
 console.log(prom);
 for(let i=0; i<1; i++){
    question = prompt('Как вы относитесь к технике Apple?','Например хорошо');
    if(typeof(question) === 'string' && typeof(question) != null &&
    question != '' && question.length < 30){
        prom.innerHTML = `<h1>${question}</h1>`;// или question
    }else{
        i--;
    }
 }








