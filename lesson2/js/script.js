"use strict";

let money = +prompt("Ващ бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
  coins: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

// Скрипт создал переменные для общение с пользователем и занес некоторые данные в внутренние свойства обьекта
// let coinsOne = prompt('Введите обязательную статью расходов в этом месяце', '');
// let expenseOne = prompt('Во сколько обойдётся?', '');
// let coinsTwo = prompt('Введите обязательную статью расходов в этом месяце', '');
// let expenseTwo= prompt('Во сколько обойдётся?', '');

// appData.expenses[coinsOne] = expenseOne;
// appData.expenses[coinsTwo] = expenseTwo;
// console.log(appData.expenses);
// Созданные переменные в итоге были добавлены внутренний свойством в внутренний обьект expense


for (let i = 0; i < 2; i++) {
  let coinsOne = prompt('Введите обязательную статью расходов в этом месяце', '');
  let expenseOne = prompt('Во сколько обойдётся?', '');


  if ( (typeof(coinsOne))=== "string" && (typeof(coinsOne)) != null && (typeof(expenseOne) != null
  && coinsOne != '' && expenseOne != '' && coinsOne.length <50)) {
    console.log('done')
    appData.expenses.coinsOne = expenseOne;
  } else {
    i--;
    alert("Данные неверны, пожалуйста введите снова");
  }
};

appData.moneyPerDay = money / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка")
} else if (appData.moneyPerDay < 2000) {
    console.log("Высокий  уровень достатка")
} else {
    console.log("Ошибка расчета")
}


// let a = 2;
// do {
//     let coinsOne = prompt('Введите обязательную статью расходов в этом месяце', '');
//     let expenseOne = +prompt('Во сколько обойдётся?', '');
//     console.log("Правильно")
//     appData.expenses[coinsOne] = expenseOne;
//     a++;
// } while (a < 2);



// while (a < 2) {
//     let coinsOne = prompt('Введите обязательную статью расходов в этом месяце', '');
//     let expenseOne = +prompt('Во сколько обойдётся?', '');
//     console.log("Правильно")
//     appData.expenses[coinsOne] = expenseOne;
//     a++;
// };