"use strict"
/*Задание 1
С помощью prompt просим пользователя ввести число. 
Обязательно валидируем ввод.
Затем с помощью alert выводим сколько в этом числе было четных цифр.
Например 223344 - должен вернуть 4, 111 - должен вернуть 0.

Задание 2
генерируем два рандомных целых числа от 1000 до 2000 
и выводим большее из них.*/

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