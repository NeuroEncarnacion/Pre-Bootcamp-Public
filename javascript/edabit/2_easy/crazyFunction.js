// You are given two numbers, a and b. Write a function which uses an expression to return the expected output. I am not going to tell you what the expression is because that will spoil the fun! :)

// Examples
// crazyfunction(10, 20) ➞ 30

// crazyfunction(17, 35) ➞ 50

// crazyfunction(61, 233) ➞ 212

function crazyFunction(a, b) {
	const result = a ^ b
	return result
}

console.log(crazyFunction(10, 20)) // 30
console.log(crazyFunction(17, 35)) // 50
console.log(crazyFunction(61, 233)) // 212