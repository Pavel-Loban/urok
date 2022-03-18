"use strict";
let money = prompt('Ваш бюджет на месяц?','');

let time = prompt('Введите дату в формате YYYY-MM-DD','');

let question1 = prompt('Введите обязательную статью расходов в этом месяце','');

let question2 = prompt('Во сколько обойдется?','');

let appData = {
    budjet: money,
    timeData: time,
    exspenses:{
        exspensesOblMonth: `"${question1}"`,
        exspensesMonth: `"${question2}"`
    },
    optionalExpenses:{},
    incom: [],
    savings: false
};


alert('Бюджет на один день равен '+ money/30);
console.log(appData.budjet);
console.log(appData.timeData);