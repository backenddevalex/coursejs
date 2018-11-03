window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

  
      let hideTab = (a) => {
         for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
         }  
            
        };

     
 
  
  hideTab(1);

  
      let showTab = (b) => {
          if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
      }
        
      };
  

  info.addEventListener("click", (event) => {
      let target = event.target;
      if (target && target.classList.contains("info-header-tab")) {
          for (let i = 0; i < tab.length; i++) {
            if(target == tab[i]) {
                hideTab(0);
                showTab(i);
                break;
                }
            }
        }
    });

    //Таймер

    let deadLine = "2018-10-21";

    let getTime = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            // hour = Math.floor((t/1000/60/60) % 24),
            // days = Math.floor((t/(1000*60*60*24))), // Функционал дней

            return {
                "total" : t,
                "hours" : hours,
                "minutes" : minutes,
                "seconds" : seconds
            };
    }

        let setClock = (id, endtime) => {
            let timer = document.getElementById(id),
                hours = timer.querySelector(".hours"),
                minutes = timer.querySelector(".minutes"),
                seconds = timer.querySelector(".seconds"),
                timeInt = setInterval(updateClock, 1000);

                function updateClock() {
                    let t = getTime(endtime);
                    hours.textContent = ("0" + t.hours).slice(-2);
                    minutes.textContent = ("0" + t.minutes).slice(-2);
                    seconds.textContent = ("0" + t.seconds).slice(-2);

                    if (t.total <= 0) {
                        clearInterval(timeInt);
                        hours.textContent = "00";
                    minutes.textContent = "00";
                    seconds.textContent = "00";
                    }            
            }  
        };

        setClock("timer", deadLine);




        //Модальное окно

        let body = document.querySelector("body"),
            more = document.querySelector(".more"),
            overlay = document.querySelector(".overlay"),
            close = document.querySelector(".popup-close"),
            statusMessage = document.createElement("div");
            statusMessage.classList.add("status");

        const modalDisplay = () => {
                overlay.style.display = "block";
                more.classList.add("more-splash");
                document.body.style.overflow = "hidden";

            };

        const modalClose = () => {
                overlay.style.display = "none";
                more.classList.remove("more-splash");
                statusMessage.style.display = "none";
                document.body.style.overflow = "";
            
        };

        body.addEventListener("click", (e) => {
                let target = e.target;

                if (target.classList.contains("description-btn") || target.classList.contains("more")) {
                    modalDisplay();
                }
                if (target.classList.contains("overlay") || target.classList.contains("popup-close")) {
                    modalClose();
                }
        });
            
            //Формы

        let message = {
            loading: "Загрузка...",
            success: "Спасибо за заявку! Скоро мы свяжемся с вами.",
            failure: "Что-то пошло не так..."
        };

        let form = document.querySelector(".main-form"),
            subForm = document.querySelector("#form"),
            input = form.getElementsByTagName("input"),
            subInput = subForm.getElementsByTagName("input");
           
            const valid = (inp) => {
                addEventListener ("input", () => {
                 inp.value = inp.value.replace(/[^\d+]/ig, "");   
                });
            };
        valid(input[0]);
        valid(subInput[1]);

      
     const sendForm = (elem) => {
          elem.addEventListener("submit", function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open("POST", "server.php");
            request.setRequestHeader("Content-type", "application/json; charset=utf-8");


            let formData = new FormData(form);

                let obj = {};
                formData.forEach(function(value, key){
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);

            request.send(json);

            request.addEventListener("readystatechange", function(){
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status === 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });


            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
                }         
            });
         };   
         
        sendForm(form);
        sendForm(subForm);    



    });