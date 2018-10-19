"use strict";

let beginPay = document.getElementById ("start"), // Кнокпа Начать Расчёт
    budgetValue = document.getElementsByClassName('budget-value')[0],    
    dayBudget = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue= document.getElementsByClassName('expenses-value')[0],
    optExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue= document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue= document.getElementsByClassName('yearsavings-value')[0];
    
    
  let expensesItem = document.getElementsByClassName('expenses-item'),
    btnOne = document.getElementsByTagName('button')[0], // Кнопка Утвердить
    btnTwo = document.getElementsByTagName('button')[1], // Вторая кнопка Утвердить
    btnThree = document.getElementsByTagName("button")[2], // Кнопка Расчитать
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    possInc = document.querySelector(".choose-income"),
    checkBox = document.querySelector("#savings"),
    summ = document.querySelector(".choose-sum"),
    perc = document.querySelector(".choose-percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    times = document.querySelector(".day-value"); // День
    
  
   
    let money , time;


beginPay.addEventListener("click", function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    

   while(isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "");

   }
    appData.coins = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    times.value = new Date(Date.parse(time)).getDate();
}); 

btnOne.addEventListener('click', function() {
    let suma = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let coinsOne = expensesItem[i].value,
            expenseOne = expensesItem[++i].value;
          if ( (typeof(coinsOne))=== "string" && coinsOne != null && expenseOne != null
        && coinsOne != '' && expenseOne != '' && coinsOne.length <50) {
          console.log('done')
          appData.expenses.coinsOne = expenseOne;
          suma += +expenseOne;
        } else {
           i--;
           // i = i - 1;
        
         }
    }
    expensesValue.textContent = suma;
});

btnTwo.addEventListener("click", function(){
    for (let i = 0 ; i < optionalExpensesItem.length; i++) {
        let nonBindExp = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = nonBindExp;
        optExpensesValue.textContent += appData.optionalExpenses[i] + " ";    
    }

});

btnThree.addEventListener("click", function() {
    if (appData.coins != undefined) {
        appData.moneyPerDay = ((appData.coins - expensesValue.textContent)/30).toFixed(); 
    dayBudget.textContent = appData.moneyPerDay;

    if(appData.moneyPerDay < 100) {
        levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay < 2000) {
        levelValue.textContent = "Высокий  уровень достатка";
        } else {
        levelValue.textContent = "Ошибка расчета";
            }
        } else {
    dayBudget.textContent = "Произошла ошибка";
    }
});

possInc.addEventListener("input", function() {
    let items = possInc.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkBox.addEventListener("click", function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

summ.addEventListener("input", function() {
    if (appData.savings == true) {
        let sum = +summ.value;
        let percentes = +perc.value;
        
        
        appData.monthIncome = sum/100/12*percentes;
        appData.yearIncome = sum/12*percentes;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

perc.addEventListener("input", function() {
    if (appData.savings == true) {
    
    let sum = +summ.value;
    let percentes = +perc.value;
    appData.monthIncome = sum/100/12*percentes;
    appData.yearIncome = sum/12*percentes;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);     
    }
});

btnOne.disabled = true;





let appData = { // Главный объект
    coins: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

    
appData.income.forEach(function(item, i) { //Перебор массива income
        document.write(" Способы доп.заработка: " + (i+1) +"." + item +"<br>");
     })
     
     
     function showmass() { //Функция вывода всего главного объекта
for (let key in appData) {
     console.log("Наша программа включает в себя данные:" + (key));
      }; 

};


    

