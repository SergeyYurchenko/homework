"use strict"

const addPizza = document.getElementById('more_pizza');
const pizzaList = document.getElementById('pizza_list');

function onPizzaButtonClick() {     
    const addPizzaItem = document.createElement('li');   

    pizzaList.appendChild(addPizzaItem);
    addPizzaItem.innerHTML = 'Я есть Пиццаа!';
    addPizzaItem.className = 'pizza_list__item';
}

function onPizzaLiClick(event) {
    if (event.target.tagName === 'LI'){
        toggleBackground(event.target); 
    }
}

function toggleBackground(el) {
    el.style.background = el.style.background === 'yellow' ? 'red':'yellow';
}

function onPizzaLiClickAltDown(event) {
    if (event.altKey) {
        deletePizzaLi(event.target);
    }
}

function deletePizzaLi(el) {
    pizzaList.removeChild(el);
}

addPizza.addEventListener('click', onPizzaButtonClick);
pizzaList.addEventListener('click', onPizzaLiClick);
pizzaList.addEventListener('click', onPizzaLiClickAltDown);

 