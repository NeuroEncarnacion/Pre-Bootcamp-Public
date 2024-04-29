// Given a number n, write a function that returns PI to n decimal places.

// Examples:
// myPi(5) ➞ 3.14159

// myPi(4) ➞ 3.1416

// myPi(15) ➞ 3.141592653589793

// Notes:
// n will not be above 15, to keep this challenge simple.
// Round up the last digit if the next digit in PI is greater or equal to 5 (see second example above).
// The return value must be a number, not a string.


function myPi(n) {
	let pi = Math.PI;
	let toDecimal = pi.toFixed(n)
	return Number(toDecimal) 
}

console.log(myPi(5)) // 3.14159
console.log(myPi(4)) // 3.1416
console.log(myPi(15)) // 3.141592653589793