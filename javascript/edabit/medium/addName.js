/*
Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

Examples :
addName({}, "Brutus", 300) ➞ { Brutus: 300 }

addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

Notes:
The value argument will be a number.
*/


function addName(obj, name, value) {
    var newObj = {};
    for (const [name, val] of Object.entries(obj)){
        newObj[name] = val;
    }
    newObj[name] = value;
    return newObj;
}

console.log(addName({}, "Brutus", 300))
console.log(addName({piano: 500}, "Brutus", 400))
console.log(addName({piano: 500, stereo: 300}, "Caligula", 440))