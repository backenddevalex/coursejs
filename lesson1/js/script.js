"use strict";

let money = prompt("Ващ бюджет на месяц?", "");
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

let coinsOne = prompt('Введите обязательную статью расходов в этом месяце', '');
let expenseOne = prompt('Во сколько обойдётся?', '');
let coinsTwo = prompt('Введите обязательную статью расходов в этом месяце', '');
let expenseTwo = prompt('Во сколько обойдётся?', '');


appData.expenses[coinsOne]=expenseOne;
appData.expense[coinsTwo] = expenseTwo;
console.log(appData.expenses);

// Созданные переменные в итоге были добавлены внутренний свойством в внутренний обьект expense

alert(money / 30);




