"use strict";

// let money, time;
// function start() {
//     money = +prompt('Ваш бюджет на месяц?','');
//     time = prompt('Введите дату в формате YYYY-MM-DD','');

// while(isNaN(money) || money == '' || money == null) {
//     money = +prompt('Ваш бюджет на месяц?','');
//         }
// }
// start();



// let appData = {
//     budjet: money,
//     timeData: time,
//     exspenses:{},
//     optionalExpenses:{},
//     incom: [],
//     savings: true
// };

// // for(let i = 2; i>0; i--)

// function chooseExpenses() {
//     for(let i = 0; i<2; i++){
//         let a = prompt('Введите обязательную статью расходов в этом месяце',''),
//             b = prompt('Во сколько обойдется?','');

//         if((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50){
//         console.log('done');
//         appData.exspenses[a] = b;
//         } else {
//             i--;
//         }
//     }
// }
// chooseExpenses();



// function detectedDayBudget() {
//     appData.moneyPerDay = (appData.budjet / 30).toFixed();
//     +alert("Ежедневный бюджет: " + appData.moneyPerDay);
// }
// detectedDayBudget();

// function detectLevel() {
//     if(appData.moneyPerDay < 100){
//         console.log('Минимальный уровень достатка');
//     }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
//          console.log('Средний уровень достатка');
//     }else if(appData.moneyPerDay > 2000){
//          console.log('Высокий уровень достатка');
//     }else{
//          console.log('Произошла ошибка');
//     }
// }
// detectLevel();


// function checkSavings() {
//     if(appData.savings == true){
//         let save = +prompt("Какова сумма накоплений?"),
//             percent = +prompt("Под какой процент?");

//         appData.monthIncome = save/100/12*percent;
//         alert("Доход в месяц с вашего депозита " + appData.monthIncome);
//     }
// }
// checkSavings();

// function chooseOptExpenses() {
//     for(let i = 1;i <= 3; i++){
//         let c = prompt('Статья необязательных расходов?','');
//         appData.optionalExpenses[i] = c;
//     }
// }
// chooseOptExpenses();

// function first() {
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback){
//     console.log('Я учу ' + lang);
//     callback();
// }

// function done() {
//     console.log('Я прошел 3й урок!');
// }

// learnJS("JavaScript", done);


let options = {
    width: 1024,
    height: 1024,
    name: 'test'
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: 'black',
    bg:'red'
};

delete options.bool;

console.log(options);

for(let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key])
}
console.log(Object.keys(options).length);

let arr = ['first',2,3,'four',5];

 arr.pop();
 arr.push('пять');
 arr.shift();
 arr.unshift('1');

// for(let i = 0; i< arr.length; i++){
//     console.log(arr[i]);
// }

arr.forEach(function(item, i, mass){
    i++;
    console.log(i + ': ' + item + ' (массив: ' + mass + ')');
});
// console.log(arr);


// let ans = prompt('', ''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arra = ['aawe', 'zzz', 'pp', 'rqa'],
//     i = arra.join(', ');

//     console.log(i);

let array = [1,15,4],
    i = array.sort(compareNum);
    function compareNum(a,b){
         return a-b;
    }

    console.log(array);

    let soldier = {
        health: 400,
        armor: 100
    };

    let john = {
        health: 100
    }

    john.__proto__ = soldier;

    console.log(john);
    console.log(john.armor);





















// function retVar() {
//     let num = 50;
//     return num;
// }

// let anatherNum = retVar();
// console.log(anatherNum);

// let str = 'test';
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = '12.2px';

// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// let st = 'ashahatjsgjsfjrsj235124674678';
// function truncate(st, maxlength) {
//     if(st.length > maxlength){
//         return st.slice(0, maxlength - 1) + '…';
//     }
//     return str;
//     // return (st.length > maxlength) ?
//     //   st.slice(0, maxlength - 1) + '…' : st;
//   }
//   console.log(truncate(st, 20));

//   function ext(tr){
//       return +tr.slice(1);
//   }
//   console.log(ext('$12034534'));

//   let c = 4;
// function addX(x) {
//   return function(n) {
//      return n + x;
//   }
// }
// const addThree = addX(3);
// let d = addThree(c);
// let d1 = addThree(c);
// console.log('example partial application', d);
// console.log('example partial application', d1);

// function createCounter() {
//        let counter = 0;
//        const myFunction = function() {
//          counter = counter + 1;
//          return counter;
//        };
//        return myFunction;
//      }

//      const increment = createCounter();
//     const c1 = increment();
//     const c2 = increment();
//    const c3 = increment();
//     console.log('example increment', c1, c2, c3);