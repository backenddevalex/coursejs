function form() {
  let message = {
    loading: "Загрузка...",
    success: "Спасибо за заявку! Скоро мы свяжемся с вами.",
    failure: "Что-то пошло не так..."
};

let form = document.querySelector(".main-form"),
    subForm = document.querySelector("#form"),
    input = form.getElementsByTagName("input"),
    subInput = subForm.getElementsByTagName("input"),
    body = document.querySelector("body"),
    statusMessage = document.createElement("div");
    statusMessage.classList.add("status");

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
}

module.exports = form;