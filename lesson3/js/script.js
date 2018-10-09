"use strict";

let money , time;


function start() {
   money = +prompt("Ваш бюджет на месяц?", "");
   time = prompt("Введите дату в формате YYYY-MM-DD", "");

   while(isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "");

   }
}

start();

let appData = {
    coins: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let coinsOne = prompt('Введите обязательную статью расходов в этом месяце', '');
    let expenseOne = prompt('Во сколько обойдётся?', '');
      if ( (typeof(coinsOne))=== "string" && coinsOne != null && expenseOne != null
    && coinsOne != '' && expenseOne != '' && coinsOne.length <50) {
      console.log('done')
      appData.expenses.coinsOne = expenseOne;
    } else {
       i--;
       // i = i - 1;
      alert("Данные неверны, пожалуйста введите снова");
    }
  }
}

chooseExpenses();

function detectDayBudget() {
   appData.moneyPerDay = (money / 30).toFixed(); 
   alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
   if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка")
    } else if (appData.moneyPerDay < 2000) {
    console.log("Высокий  уровень достатка")
    } else {
    console.log("Ошибка расчета")
    } 
}

detectLevel();


function checkedSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");


        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
    }
}

checkedSavings();



function chooseOptExpenses () {
    for (let c = 1 ; c < 4; c++) {
        let nonBindExp = prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[c] = nonBindExp;
    }
}

chooseOptExpenses();