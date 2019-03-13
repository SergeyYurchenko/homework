"use strict"
const calcSettings = {
	operandFirst: 'Первое число', 
	mathOperation: 'Введите знак арифметической операции (+, -, *, /)', 
	operandSecond: 'Второе число'
}
let operandFirst;
let operandSecond;

function getOperand(operandNumber) {
	switch(operandNumber) {
		case '1':  
		operandFirst = parseInt(prompt(calcSettings.operandFirst, ''));
		
		if (isNaN(operandFirst) || operandFirst === '' || operandFirst === null) {
		 	alert('Ошибка!')
		 	return getOperand(operandNumber);
		}
		break;

		case '2': 
		operandSecond = parseInt(prompt(calcSettings.operandSecond, ''));

	 	if (isNaN(operandSecond) || operandSecond === '' || operandSecond === null) {
		 	alert('Ошибка!')
		 	return getOperand(operandNumber);
		}
		break;
	}
} 		

function getAction() {
	let action = prompt(calcSettings.mathOperation, '');

	if (!checkOp(action)) {
		alert('Знак арифметической операции некорректный');
		return getAction();
	}
	return action;
}

function checkOp(op) {
	return op === '+' || op === '-' || op === '*' || op === '/';
}

function calculate(value1, value2, value3) {
	if(value3 === '+') {
	    return value1+value2;
	} else if(value3 === '-') {
	    return value1-value2;
	} else if(value3 === '*') {
	    return value1*value2;
	} else if(value3 === '/') {
	    if(y == 0) {
	        return 'Делить на ноль нельзя!';
	    } else {
	        return value1/value2;
	    }
	}
}

const operandA = getOperand('1'); 
const operandB = getOperand('2'); 
const action = getAction(); 
const result = calculate(operandFirst, operandSecond, action)

alert('Результат: ' + result);






