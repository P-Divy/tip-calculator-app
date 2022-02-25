const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tips = document.querySelectorAll(".tips");
const tipPerson = document.getElementById("tip-amount");
const totalPerson = document.getElementById("total-amount");
const reset = document.querySelector(".reset");
const custom = document.querySelector(".custom");
const error = document.querySelector(".error");

billInput.addEventListener("input", billInputFunc);
tips.forEach(function(val) {
    val.addEventListener("click", tipFunc);
});
custom.addEventListener("input", customFunc);
peopleInput.addEventListener("input", peopleInputFunc);
reset.addEventListener("click", resetFunc);

// billInput.value = "0.0";
// peopleInput.value = "1";
// tipPerson.innerHTML = "$" + (0.0).toFixed(2);
// totalPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let tipValue = 0.15;
let peopleValue = 1;

function billInputFunc(){
    billValue = parseFloat(billInput.value);
    calculate();
}

function peopleInputFunc(){
    peopleValue = parseFloat(peopleInput.value);

    if(peopleValue < 1){
        error.style.display = "flex";
        peopleInput.style.border = "thick solid red";
    }
    else{
        error.style.display = "none";
        peopleInput.style.border = "none";
        calculate();
    }
}

function tipFunc(event){
    tips.forEach(function(val){
        val.classList.remove("active");
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active");
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    });
   calculate();
}

function customFunc(){
    tipValue = parseFloat(custom.value/100);
    tips.forEach(function (val) {
        val.classList.remove("active");
      });
      calculate();
}

function calculate(){
    if (peopleValue >= 1){
        let tipAmount = (billValue * tipValue) / peopleValue;
        let totalAmount = (billValue * (tipValue + 1) )/ peopleValue;
        tipPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerson.innerHTML = "$" + totalAmount.toFixed(2); 

    }
}

function resetFunc(){
    billInput.value = "";
    billInputFunc();
    peopleInput.value = "";
    peopleInputFunc();
    custom.value= "";
}





