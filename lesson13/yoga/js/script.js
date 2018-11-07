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
                if (target == tab[i]) {
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
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        // hour = Math.floor((t/1000/60/60) % 24),
        // days = Math.floor((t/(1000*60*60*24))), // Функционал дней

        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    };

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
        addEventListener("input", () => {
            inp.value = inp.value.replace(/[^\d+]/ig, "");
        });
    };
    valid(input[0]);
    valid(subInput[1]);


    const sendForm = (elem) => {
        statusMessage.style.display = "block";
        elem.appendChild(statusMessage);

        let formData = new FormData(elem),
            obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        function dataPost() {
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open("POST", "server.php");
                request.setRequestHeader("Content-type", "application/json; charset=utf-8");
                request.addEventListener("readystatechange", function () {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status === 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });

                request.send(json);

            }); //Promise End  
        } //End dataPost

        const clearInput = () => {
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        };


        dataPost(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);

    };

    body.addEventListener("submit", (event) => {
        event.preventDefault();
        let target = event.target;
        if (target.id == "form" || target.classList.contains("main-form")) {
            sendForm(target);
        }
    });

//Слайдер

    let slideIndex = 1, //Текущий слайд
        slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector('.prev'),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    

        const showSlides = (n) => { //Функция перебора слайдов 
            
            if(n > slides.length) {
                slideIndex = 1;
            }
            if(n < 1) {
                slideIndex = slides.length;
            }
                
       
        slides.forEach((item) => item.style.display = "none");
        // for(let i = 0; i < slides.length; i++) { //2 способ, 1 выше
        //     slides[i].style.diplay = "none";
        // }
        dots.forEach((item) => item.classList.remove("dot-active"));
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("dot-active");
    };
    
    showSlides(slideIndex);

const plusSlides = (n) => {
    showSlides(slideIndex += n);
};
const currentSlide = (n) => {
    showSlides(slideIndex = n);
};

prev.addEventListener("click", () => {
    plusSlides(-1);
});

next.addEventListener("click", () => {
    plusSlides(1);
    });

    dotsWrap.addEventListener("click", (event) => { 
        for(let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains("dot") && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });


        //Калькулятор

    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personsSumm = 0,
        daysSumm = 0,
        total = 0;


        totalValue.innerHTML = 0;

        persons.addEventListener("change", function() {
            personsSumm = +this.value;
            total = (daysSumm + personsSumm)*4000;

            if (restDays.value == "" || persons.value == "") {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        restDays.addEventListener("change", function() {
            daysSumm = +this.value;
            total = (daysSumm + personsSumm)*4000;

            if(persons.value == "" || restDays.value == "") {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        place.addEventListener("change", function() {
            if(restDays.value == "" || persons.value == "") {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });

        const validCalc = (val) => {
            addEventListener("input", () => {
                val.value = val.value.replace(/[^\d+]/ig, "");
            });
        };
        validCalc(persons);
        validCalc(restDays);

        

});





