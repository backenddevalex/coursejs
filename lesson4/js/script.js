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
    savings: true,
    chooseExpenses: function() {
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
},
    detectDayBudget: function() {
        appData.moneyPerDay = (money / 30).toFixed(); 
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
            } else if (appData.moneyPerDay < 2000) {
            console.log("Высокий  уровень достатка");
            } else {
            console.log("Ошибка расчета");
        } 
    
     },
     checkedSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
                
            appData.monthIncome = save/100/12*percent.toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
        }
     },
     chooseOptExpenses: function() {
        for (let i = 1 ; i < 4; i++) {
            let nonBindExp = prompt("Статья необязательных расходов?", ""); 
            appData.optionalExpenses[i] = nonBindExp;
            
        }
     },
     chooseIncome: function() {
         for (let i = 0; i < 1; i++) {
           let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");  
         if (items != "" && items != null && isNaN(items)) {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();    
            } else {
                i--;

            
            }
        } 
        appData.income.forEach(function(item, i) {
           document.write(" Способы доп.заработка: " + (i+1) +"." + item +"<br>");
        }); 
        
         
    
    }
   
};

    
function showMass() {
   for (let key in appData) {
        console.log("Наша программа включает в себя данные:" + (key));
         }; 
};

