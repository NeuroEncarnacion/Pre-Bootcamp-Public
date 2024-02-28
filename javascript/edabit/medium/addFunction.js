/*
Given a number, n, return a function which adds n to the number passed to it.

Examples:
add(10)(20) ➞ 30

add(0)(20) ➞ 20

add(-30)(80) ➞ 50

Notes:
1. All numbers used in the tests will be integers (whole numbers).
2. Returning a function from a function is a key part of understanding higher order functions (functions which operate on and return functions).
*/


function add(n) {
	return function(x){
		return n + x
	}
}

console.log(add(50)(70)) // 120