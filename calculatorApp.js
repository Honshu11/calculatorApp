//selectors

const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempDisplay = document.querySelector(".tempDisplay");

const number = document.querySelectorAll(".numbers");
const operation = document.querySelectorAll(".operations"); //quesrySelectorAll creates a node, thus can be iterated through.
const equal = document.querySelector(".equals");
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
    if(event.target.innerText === '.' && !hasDecimal){  //handles more than 2 decimal points.. should.
      hasDecimal = true;      
    } else if(event.target.innerText === '.' && hasDecimal){
      return;
    }
    displayInput2 += event.target.innerText; // sets the innerText into the displayInput2 outlay
    display2.innerText = displayInput2;
  })
})


operation.forEach( operations => {
	operations.addEventListener('click', (event) =>{
		if(!displayInput2) return;
		hasDecimal = false;
		let operationName = event.target.innerText;
		if(displayInput1 && displayInput2 && lastResult){
			calculate(); // create function to do the arithmitic
		} else {
			result = parseFloat(displayInput2);
		}
		clearNum(operationName); // function to clear input from display
		lastResult = operationName;
		console.log(result);
	})
})

equal.addEventListener('click', (event) => {
	if(!displayInput1 || !displayInput2) return;
	hasDecimal = false;
	calculate();
	clearNum();
	displayInput2.innerText = result;
	tempDisplay.innerText = "";
	displayInput2 = result;
	displayInput1 = "";
})


allClear.addEventListener('click', (event) => { //clears all equations from calculator
	display2.innerText = "";
	display1.innerText = "";
	tempDisplay.innerText = "0";
	result = "";
	displayInput1 = "";
	displayInput2 = "";
})

clear.addEventListener("click", (event) =>{ // clears last entry entered in calculator
	display2.innerText = "";
	displayInput2 = "";
})

equal.addEventListener("click", (event) =>{
	if(displayInput2 && displayInput1) return;
	calculate();
	clearNum();
})

function clearNum(name = ""){
	displayInput1 += displayInput2 + ' ' + name + ' ';
	display1.innerText = displayInput1;
	display2.innerText = "";
	displayInput2 = "";
	tempDisplay.innerText = result;
}

function calculate(){
	if(lastResult === '*'){
		result = parseFloat(result) * parseFloat(displayInput2);
	} else if(lastResult === '+'){
		result = parseFloat(result) + parseFloat(displayInput2);
	} else if(lastResult === '-'){
		result = parseFloat(result) - parseFloat(displayInput2);
	} else if(lastResult === '/'){
		result = parseFloat(result) / parseFloat(displayInput2);
	} else if(lastResult === '%'){
		result = parseFloat(result) % parseFloat(displayInput2);
	}
}
