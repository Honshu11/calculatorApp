//selectors

const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempDisplay = document.querySelector(".tempDisplay");

const number = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector(".equal");
const allClear = document.querySelector(".allClear");
const clear = document.querySelector(".clear");

//global variables

let displayInput1 = "";
let displayInput2 = "";
let result = null;
let lastResult = "";
let hasDecimal = false;



number.forEach( numbers => {
  numbers.addEventListener('click', (event) =>{
    if(event.target.innerText === '.' && !hasDecimal){  //handles more than 2 decimal points
      hasDecimal = true;      
    } else if(event.target.innerText === '.' && hasDecimal){
      return;
    }
    displayInput2 += event.target.innerText;
    display2.innerText = displayInput2;
  })
})


