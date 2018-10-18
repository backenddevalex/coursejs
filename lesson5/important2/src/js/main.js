"use strict";

let beginPay = document.getElementById ("start"),
    inpExp = document.getElementsByClassName('expenses-item'),
    btnOne = document.getElementsByTagName('button.expenses-item-btn')[0],
    btnTwo = document.getElementsByTagName('button.count-budget-btn')[1],
    btnThree = document.getElementsByTagName("button")[2],
    optExp = document.querySelectorAll(".optionalexpenses-item"),
    possInc = document.querySelector(".choose-income"),
    checkBox = document.querySelector("#savings"),
    summ = document.querySelector(".choose-sum"),
    perc = document.querySelector(".choose-percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    times = document.querySelector(".day-value");
    



    let value = [];
  value[0] = document.getElementsByClassName('budget-value'),
  value[1] = document.getElementsByClassName("daybudget-value"),
  value[2] = document.getElementsByClassName('level-value'),
  value[3] = document.getElementsByClassName('expenses-value'),
  value[4] = document.getElementsByClassName('optionalexpenses-value'),
  value[5] = document.getElementsByClassName('income-value'),
  value[6] = document.getElementsByClassName('monthsavings-value'),
  value[7] = document.getElementsByClassName('yearsavings-value');



