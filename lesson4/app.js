"use strict"

function getOperand(Question) {
	let operand = prompt(Question, '');
					   
	if (isOperandValid(operand)) {
	 	alert('Ошибка!')
	 	return getOperand(Question);
	}
	return operand;
} 		

function isOperandValid(operandToCheck) {
	return isNaN(operandToCheck) || operandToCheck === '' || operandToCheck === null || deleteSpace(operandToCheck) === '';
}

function deleteSpace(operand){
    return (operand.split(' ').join(''));     
}

function getAction() {
	let action = prompt('Введите знак арифметической операции (+, -, *, /)', '');

	if (!isActionValid(action)) {
		alert('Знак арифметической операции некорректный');
		return getAction();
	}
	return action;
}

function isActionValid(action) {
	return action === '+' || action === '-' || action === '*' || action === '/';
}

function calculate(operandA, operandB, action) {
	if(action === '+') {
	    return Number(operandA) + Number(operandB);
	} else if(action === '-') {
	    return Number(operandA) - Number(operandB);
	} else if(action === '*') {
	    return Number(operandA) * Number(operandB);
	} else if(action === '/') {
        return Number(operandA) / Number(operandB);
	}
}

const operandA = getOperand('Первое число'); 
const operandB = getOperand('Второе число'); 
const action = getAction(); 
const result = calculate(operandA, operandB, action)

alert('Результат: ' + result);






