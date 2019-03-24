"use strict"

function askUserName() {
    const name = prompt('Как вас зовут?', '');

	if (isNameWrong(name)) {
 		alert('Ошибка!');
 		return askUserName();
    } 
    return name;
}

function isNameWrong(name) {
	return !isNaN(name) || name === null || deleteSpace(name) === '';
}

function deleteSpace(name){
    return (name.split(' ').join(''));     
}

document.getElementsByTagName('h1')[0].innerHTML = 'Привет, ' + askUserName();

function getNumber() {
    const number = prompt('Введите число от 0 до 100', '');

	if (isNumberWrong(number)) {
        alert('Ошибка!');
        return getNumber();
    } 
    else if (number < 0 || number > 100) {
       alert('Я сказал от 0 до 100!');
       return getNumber();
    } 
    return number;
}

function isNumberWrong(number) {
	return isNaN(number) || number === null || deleteSpace(number) === '';
}

const number = getNumber();

let userNumberUl = document.createElement('ul');
document.body.appendChild(userNumberUl);

for (let i = 0; i < number; i++) {
    let userNumberLi = document.createElement('li');
    userNumberUl.appendChild(userNumberLi);
    userNumberLi.innerHTML = i;
}











