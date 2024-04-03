// Create a function that takes a string and returns a string in which each character is repeated once.

// Examples:
// doubleChar("String") ➞ "SSttrriinngg"

// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleChar("1234!_ ") ➞ "11223344!!__  "

// Notes:

// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.


function doubleChar(str) {
	var arrOfString = str.split('');
	var arrLen = arrOfString.length - 1;
	for (i = 0 ;i <= arrLen; i++){
		arrOfString[i] += arrOfString[i]
	}
	return arrOfString.join('')
}


console.log(doubleChar("String"))
console.log(doubleChar("Hello World"))
console.log(doubleChar("1234!_"))
