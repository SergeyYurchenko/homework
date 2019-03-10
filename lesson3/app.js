"use strict"
let points = 0;
const questions = 
[{ question: 'Сколько будет 2+2?', answer: 4, type: 'prompt'},

{ question: 'Солнце встает на востоке?', answer: true, type: 'confirm'},

{ question: 'Сколько будет 5 << 2 ?', answer: 20, type: 'prompt'}];

for (let i=0; i < questions.length; i++) {
	
	if(askQuestion()) {
		points += 10;
		console.log('Правильно, + 10 очков!');
	} else {
		console.log('Неправильно!');
	} 

	function askQuestion() {
		if (questions[i].type == 'prompt') {
			let ask =  prompt(questions[i].question, ''); 
			if (ask == (questions[i].answer)) {
				return true;
			} 
			else if (!ask || isNaN(ask)) { 
				alert('Ошибка');
			}
		} else if (questions[i].type == 'confirm') {
			let ask =  confirm(questions[i].question, ''); 
		}
	}
};

alert('Вы набрали ' + points + ' очков');
