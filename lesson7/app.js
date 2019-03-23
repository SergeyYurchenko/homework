"use strict"

function userName(name) {
    
    name = prompt('Как вас зовут?', '');

	if (isNameFalse(name)) {
 		alert('Ошибка!');
 		return userName(name);
    } 
    return name;
}

function isNameFalse(name) {
	return !isNaN(name) || name === null || deleteSpace(name) === '';
}

function deleteSpace(name){
    return (name.split(' ').join(''));     
}

document.getElementsByTagName('h1')[0].innerHTML = 'Привет, ' + userName(name);

function getNumber(number) {
    let userNumberUl = document.createElement('ul');
    document.body.appendChild(userNumberUl);

	if (isNumberFalse(number)) {
        alert('Ошибка!');
        return getNumber(prompt('Введите число от 0 до 100', ''));
    } 
    else if (number < 0 || number > 100) {
       alert('Я сказал от 0 до 100!');
       return getNumber(prompt('Введите число от 0 до 100', ''));
    } 
    else {
        for (let i = 0; i < number; i++) {
            let userNumberLi = document.createElement('li');
            userNumberUl.appendChild(userNumberLi);
            userNumberLi.innerHTML = i;
        } 
    }
}

function isNumberFalse(number) {
	return isNaN(number) || number === null || deleteSpace(number) === '';
}

getNumber(prompt('Введите число от 0 до 100', ''));





