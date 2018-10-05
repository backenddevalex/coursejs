"use strict";

let money = prompt("Ващ бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {

  coins: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false

};

// Скрипт создал переменные для общение с пользователем и занес некоторые данные в внутренние свойства обьекта

let coins = prompt('Введите обязательную статью расходов в этом месяце');
let expense = prompt('Во сколько обойдётся?');
let coin = prompt('Введите обязательную статью расходов в этом месяце');
let epx = prompt('Во сколько обойдётся?');


appData.expenses[coins, coin]=expense, epx;

// Созданные переменные в итоге были добавлены внутренний свойством в внутренний обьект expense

alert(money/30);




