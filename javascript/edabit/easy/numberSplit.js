// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples:
// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]

// Notes:
// All numbers will be integers.
// You can expect negative numbers too.


function numberSplit(n) {
	var arr = []
	var splitNum = n / 2 
	arr.push(Math.floor(splitNum))
	arr.push(Math.ceil(splitNum))
	return arr
}

console.log(numberSplit(4)) // [2,2]
console.log(numberSplit(10)) // [5,5]
console.log(numberSplit(11)) // [5,6]
console.log(numberSplit(-9))// [-5,-4]