function calc() {
  let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personsSumm = 0,
        daysSumm = 0,
        total = 0;


        totalValue.innerHTML = 0;

        function summ() {
            personsSumm = +persons.value;
            daysSumm = +restDays.value;
            total = (daysSumm * personsSumm)*4000;

        if(restDays.value == "" || persons.value == "" || restDays.value == 0 || persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }
        }
        
        persons.addEventListener('change', summ);
        restDays.addEventListener('change', summ);
        place.addEventListener('change', summ);

        const validCall = (val) => {
            addEventListener("input", () => {
                val.value = val.value.replace(/[^\d+]/ig, "");
            });
        };
        validCall(persons);
        validCall(restDays);
}

module.exports = calc;