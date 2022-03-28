

let money, time;
function start() {
    money = +prompt('Ваш бюджет на месяц?','');
    time = prompt('Введите дату в формате YYYY-MM-DD','');

while(isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?','');
        }
}
start();



let appData = {
    budjet: money,
    timeData: time,
    exspenses:{},
    optionalExpenses:{},
    incom: [],
    savings: true,
    chooseExpenses: function() {
        for(let i = 0; i<2; i++){
            let a = prompt('Введите обязательную статью расходов в этом месяце',''),
                b = prompt('Во сколько обойдется?','');

            if((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50){
            console.log('done');
            appData.exspenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectedDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        +alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100){
            console.log('Минимальный уровень достатка');
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
             console.log('Средний уровень достатка');
        }else if(appData.moneyPerDay > 2000){
             console.log('Высокий уровень достатка');
        }else{
             console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1;i <= 3; i++){
            let c = prompt('Статья необязательных расходов?','');
            appData.optionalExpenses[i] = c;
        }
    },
    chooseIncom: function() {
        for(let i = 0; i < 1; i++){
            let items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)', '');
            if(typeof(items) === 'string' && typeof(items) !== null &&
            items != ''){
                appData.incom = items.split(',');
                appData.incom.push(prompt('Что-то еще?',''));
                appData.incom.sort();
                appData.incom.forEach(function(item, i, incom) {
                    i++;
                    alert(i +' - Способ доп. заработка: ' + item);
                    // alert('Способы доп. заработка: ' + )
                });
            }else{
                i--;
            }
        }
    }
};


for(let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ': ' + appData[key]);
}




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