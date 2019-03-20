"use strict"

function copy(object) {
	let objectCopy = {};
     
     	for (let key in object) {
     		
 			if (typeof object[key] !== "object") {
	    		objectCopy[key] = object[key];
	    	} 

	    	else if (typeof object[key] == "array") {
	    		objectCopy = [];

				for (let i = 0, len = obj.length; i < len; i++) {
					arrayCopy[i] = copy(object[i]);
				}
	    	}

	    	else {
		    	objectCopy[key] = copy(object[key]);
			}	
		}		
	return objectCopy;
}

const obj = {
	name: 'Alex', 
	age: 33, 
	adress: {country: 'UA', city: 'Dnipro'},
	langs: [
        { name: 'English', level: 'c2'},
        { name: 'Deutsch', level: 'b1'},
        { name: 'Arabic',  level: 'a2'}
    ]
};
const objCopy = copy(obj);

console.log(obj);
console.log(objCopy);