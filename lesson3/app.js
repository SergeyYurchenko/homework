"use strict"
let points = 0;
const questions = 
[{ question: 'Сколько будет 2+2?', answer: 4, type: 'prompt'},

{ question: 'Солнце встает на востоке?', answer: true, type: 'confirm'},

{ question: 'Сколько будет 5 << 2 ?', answer: 20, type: 'prompt'}];

function askQuestion(questionNumber) {
	if (questions[questionNumber].type == 'prompt') {
		let ask =  prompt(questions[questionNumber].question, ''); 
		return (ask == (questions[questionNumber].answer)); 

		if (ask === '' || ask === null  || isNaN(ask)) { 
			alert('Ошибка');
		}
	} else if (questions[questionNumber].type == 'confirm') {
		let ask =  confirm(questions[questionNumber].question, ''); 
		return ask == (questions[questionNumber].answer);  
	}
}

for (let i=0; i < questions.length; i++) {
	
	if(askQuestion(i)) {
		points += 10;
		console.log('Правильно, + 10 очков!');
	} else {
		console.log('Неправильно!');
	} 
};

alert('Вы набрали ' + points + ' очков');
