// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples:
// sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// sumOfCubes([3, 4, 5]) ➞ 216

// sumOfCubes([2]) ➞ 8

// sumOfCubes([]) ➞ 0

// Notes:
// If given an empty array, return 0.


function sumOfCubes(nums) {
	let result = 0
	for (let i = 0; i < nums.length; i++){
		let num = nums[i];
		let expoNum = num ** 3
		result += expoNum
	}
	return result
}

console.log(sumOfCubes([1, 5, 9])) // 855
console.log(sumOfCubes([3, 4, 5])) // 216
console.log(sumOfCubes([2])) // 8 
console.log(sumOfCubes([])) // 0