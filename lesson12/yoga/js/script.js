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
                 
     
        }

        setClock("timer", deadLine);




        //Модальное окно

        let more = document.querySelector(".more"),
            overl = document.querySelector(".overlay"),
            close = document.querySelector(".popup-close");

            more.addEventListener("click", function() {
                overl.style.display = "block";
                this.classList.add("more-splash");
                document.body.style.overflow = "hidden";


            })
            close.addEventListener("click", function() {
                overl.style.display = "none";
                more.classList.remove("more-splash");
                document.body.style.overflow = "";


                

            })

            //Модальное окно description-btn
            let descript = document.getElementsByClassName("description-btn")[0],
            overlay = document.querySelector(".overlay"),
            closen = document.querySelector(".popup-close");

            descript.addEventListener("click", function() {
                overlay.style.display = "block"; 
                this.classList.add("more-splash");
                document.body.style.overflow = "hidden";


            })
            closen.addEventListener("click", function() {
                overlay.style.display = "none";
                more.classList.remove("more-splash");
                document.body.style.overflow = "";

            })


            //Модальное окно desription-btn(1)

            let descripton = document.getElementsByClassName("description-btn")[1],
            z = document.querySelector(".overlay"),
            c = document.querySelector(".popup-close");

            descripton.addEventListener("click", function() {
                z.style.display = "block";
                this.classList.add("more-splash");
                document.body.style.overflow = "hidden";


            })
            c.addEventListener("click", function() {
                z.style.display = "none";
                more.classList.remove("more-splash");
                document.body.style.overflow = "";

            })


            //Модальное окно desription-btn(2)
            let d = document.getElementsByClassName("description-btn")[2],
            o = document.querySelector(".overlay"),
            cl = document.querySelector(".popup-close");

            d.addEventListener("click", function() {
                o.style.display = "block";
                this.classList.add("more-splash");
                document.body.style.overflow = "hidden";


            })
            cl.addEventListener("click", function() {
                o.style.display = "none";
                more.classList.remove("more-splash");
                document.body.style.overflow = "";

            })

            
            //Модальное окно desription-btn(3)
            let desc = document.getElementsByClassName("description-btn")[3],
            over = document.querySelector(".overlay"),
            cloz = document.querySelector(".popup-close");

            desc.addEventListener("click", function() {
                over.style.display = "block";
                this.classList.add("more-splash");
                document.body.style.overflow = "hidden";


            })
            cloz.addEventListener("click", function() {
                over.style.display = "none";
                more.classList.remove("more-splash");
                document.body.style.overflow = "";

            })


                //Формы

        let message = {
            loading: "Загрузка...",
            success: "Спасибо за заявку! Скоро мы свяжемся с вами.",
            failure: "Что-то пошло не так..."
        };

        let form = document.querySelector(".main-form"),
            letters = document.getElementsByName("letter-form"),
            input = document.getElementsByTagName("input"),
            statusMessage = document.createElement("div");
            
            

            statusMessage.classList.add("status");

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

        


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

    
        
     }); 






