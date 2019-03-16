"use strict"
function get_even_count(userNumber) {
	var numberArray = userNumber.toString().split(['']);
	var count = 0;

 	for (let i = 0; i < numberArray.length; i++) {
	 	if (numberArray[i] % 2 === 0) {
	 		count++;
	 	}
 	}
	return alert(count);
}
get_even_count(prompt('Введите число', ''));


function random(min, max) {
	let numberFirst = Math.trunc((Math.random() * (max - min) + min));
	let numberSecond = Math.trunc((Math.random() * (max - min) + min));
	console.log(numberFirst);
	console.log(numberSecond);

	if (numberFirst > numberSecond) {
		alert(numberFirst);
	} else {
		alert(numberSecond);
	}
}

random(1000, 2000);