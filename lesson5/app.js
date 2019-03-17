"use strict"
function get_even_count(userNumber) {
	var numberArray = userNumber.toString().split('');
	var count = 0;

 	for (let i = 0; i < numberArray.length; i++) {
	 	if (numberArray[i] % 2 === 0) {
	 		count++;
	 	}
 	}
	return alert(count);
}
get_even_count(prompt('Введите число', ''));

function generateNumber(min, max) {
	return Math.trunc((Math.random() * (max - min) + min));
}
let firstNumber = generateNumber(1000, 2000);
let secondNumber = generateNumber(1000, 2000);
console.log(firstNumber);
console.log(secondNumber);
alert(Math.max(firstNumber,secondNumber));
