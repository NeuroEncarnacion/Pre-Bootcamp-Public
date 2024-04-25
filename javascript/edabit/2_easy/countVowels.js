// Create a function that takes a string and returns the number (count) of vowels contained within it.

// Examples:
// countVowels("Celebration") ➞ 5

// countVowels("Palm") ➞ 1

// countVowels("Prediction") ➞ 4

// Notes:
// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.


function countVowels(str) {
	const regex = /[aeiou]/gi;
	const found = str.match(regex);
	return found.length
}

console.log(countVowels("Celebration")) // 5
console.log(countVowels("Palm")) // 1 
console.log(countVowels("Prediction")) // 4