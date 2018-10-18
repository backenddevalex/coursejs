"use strict";

let beginPay = document.getElementById ("start"),
budgetValue = document.getElementsByClassName('budget-value')[0],    
dayBudget = document.getElementsByClassName("daybudget-value")[0],
levelValue = document.getElementsByClassName('level-value')[0],
expensesValue= document.getElementsByClassName('expenses-value')[0],
optExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
incomeValue= document.getElementsByClassName('income-value')[0],
monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
yearSavingsValue= document.getElementsByClassName('yearsavings-value')[0];

 let inpExp = document.getElementsByClassName('expenses-item'),
    btnOne = document.getElementsByTagName('button')[0],
    btnTwo = document.getElementsByTagName('button')[1],
    btnThree = document.getElementsByTagName("button")[2],
    optExp = document.querySelectorAll(".optionalexpenses-item"),
    possInc = document.querySelector(".choose-income"),
    checkBox = document.querySelector("#savings"),
    summ = document.querySelector(".choose-sum"),
    perc = document.querySelector(".choose-percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    times = document.querySelector(".day-value");
    


