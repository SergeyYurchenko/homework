"use strict"

function copy(object) {
	let objectCopy = {};
     
     	for (let key in object) {

 			if (typeof object[key] !== "object") {
	    		objectCopy[key] = object[key];
	    	} 
	    	
	    	else {
		    	objectCopy[key] = copy(obj[key]);
			}	
		}		
	return objectCopy;
}

const obj = {name: 'Alex', age: 33, adress: {country: 'UA', city: 'Dnipro'}};
const objCopy = copy(obj);

console.log(obj, 'original');
console.log(objCopy);
