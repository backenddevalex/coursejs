"use strict";

let menu = document.querySelector(".menu"),
    menuitem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.querySelector(".adv"),
    answer = document.getElementById("prompt")
    


let li = document.createElement("li");
li.classList.add("menu-item");
menu.appendChild(li);
li.textContent = "Пятый пункт";

menu.insertBefore(menuitem[2], menuitem[1]);

document.body.style.background = "url(img/apple_true.jpg)";

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

let ask = prompt('Ваше отношение к технике apple?', '');
answer.textContent = 'Хорошая техника';







