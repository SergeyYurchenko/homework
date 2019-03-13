"use strict"
const calcSettings = [
	{operand: 'Первое число'},
	{operand: 'Второе число'},
	{mathOperation: 'Введите знак арифметической операции (+, -, *, /)'}
];

function getOperand(operandNumber) {
	let operand = parseInt(prompt(calcSettings[operandNumber].operand, ''));
					   
	if (isNaN(operand) || operand === '' || operand === null) {
	 	alert('Ошибка!')
	 	return getOperand(operandNumber);
	}
	return operand;
} 		

function getAction() {
	let action = prompt(calcSettings[2].mathOperation, '');

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
        return value1/value2;
	}
}

const operandA = getOperand(0); 
const operandB = getOperand(1); 
const action = getAction(); 
const result = calculate(operandA, operandB, action)

alert('Результат: ' + result);






