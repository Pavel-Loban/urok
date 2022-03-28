"use strict";
let money = +prompt('Ваш бюджет на месяц?','');

let time = prompt('Введите дату в формате YYYY-MM-DD','');

let appData = {
    budjet: money,
    timeData: time,
    exspenses:{

    },
    optionalExpenses:{},
    incom: [],
    savings: false
};

// let question3 = prompt('Введите обязательную статью расходов в этом месяце','');
// let question4 = prompt('Во сколько обойдется?','');

// appData.exspenses.question1 = question2;
// appData.exspenses.question3 = question4;


// for(let i = 2; i>0; i--)


for(let i = 0; i<2; i++)
{
    let a = prompt('Введите обязательную статью расходов в этом месяце','');
    let b = prompt('Во сколько обойдется?','');

    if((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
    && a!= '' && b != '' && a.length < 50){
        console.log('done');
        appData.exspenses[a] = b;
    }else{
        i--;

    }
};

appData.moneyPerDay = appData.budjet / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log('Минимальный уровень достатка');
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log('Средний уровень достатка');
}else if(appData.moneyPerDay > 2000){
    console.log('Высокий уровень достатка');
}else{
    console.log('Произошла ошибка');
}