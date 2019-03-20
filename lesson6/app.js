"use strict"

function copy(object) {
	let objectCopy = {};
     
     	for (let key in object) {
     		
	    	if (object[key] == Array) {   
	    		objectCopy = [];

				for (let i = 0; i < obj.length; i++) {
					objectCopy[i] = copy(object[i]);
				}
	    	}

	    	else if (typeof item === "object" && !Array.isArray(object[key]) && item !== null) {
	      		objectCopy[key] = copy(object[key]);
	     	} 

	    	else {
		    	objectCopy[key] = object[key];
			}	
		}		
	return objectCopy;
}

const obj = {
	name: 'Alex', 
	age: 33, 
	adress: {country: 'UA', city: 'Dnipro'},
	langs: 
	[	
        { name: 'English', level: 'c2'},
        { name: 'Deutsch', level: 'b1'},
        { name: 'Arabic',  level: 'a2'},
    ],
    numbers: [22, 33]
};
const objCopy = copy(obj);

console.log(obj);
console.log(objCopy);