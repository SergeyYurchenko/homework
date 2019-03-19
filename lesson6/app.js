"use strict"

function copy(object) {
	let objectCopy = {};
     
     	for (let key in obj) {

 			if (typeof obj[key] !== "object") {
	    		objectCopy[key] = obj[key];
	    	} 
	    	
	    	else {
		    	objectCopy[key] = Object.assign({}, obj);
			}	
		}		
	return objectCopy;
}

const obj = {name: 'Alex', age: 33, adress: {country: 'UA', city: 'Dnipro'}};
const objCopy = copy(obj);

console.log(obj, 'original');
console.log(objCopy);