// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

// Examples:
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []

// Notes:
// Arrays start at index 0.

function getOnlyEvens(nums) {
	let numArr = [];
	for (let i = 0; i < nums.length; i++){
		if (i % 2 == 0 && nums[i] % 2 == 0){
			numArr.push(nums[i]);
		}  
	}
	return numArr;
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])) // [2, 4]
console.log(getOnlyEvens([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(getOnlyEvens([1, 2, 3, 4, 5])) // []