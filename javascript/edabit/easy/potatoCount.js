// Create a function to return the amount of potatoes there are in a string.

// Examples:
// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1


function potatoes(str) {
	var count = (str.match(/potato/g) || []).length;
	return count
}


console.log(potatoes("potatopineapple"))    // 1
console.log(potatoes("potatopotatopotato")) // 3