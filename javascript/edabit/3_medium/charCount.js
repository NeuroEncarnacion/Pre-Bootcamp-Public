/*
Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

Examples:
charCount("a", "edabit") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4

Notes:
Your output must be case-sensitive (see second example).
*/

function charCount(myChar, str) {
	let sum = 0
	for (i = 0; i < str.length; i++){
		if (myChar == str[i]){
			sum += 1
		}
	}
	return sum 
}

console.log(charCount("a", "edabit")) // 1
console.log(charCount("c", "Chamber of secrets")) // 1 
console.log(charCount("b", "big fat bubble")) // 4