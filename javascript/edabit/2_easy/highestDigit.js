// Create a function that takes a number as an argument and returns the highest digit in that number.

// Examples :
// highestDigit(379) ➞ 9

// highestDigit(2) ➞ 2

// highestDigit(377401) ➞ 7


function highestDigit(number) {
	var highest = 0
	var intStr = number.toString();
	var arrOfStr = intStr.split('');
	for (i=0; i<arrOfStr.length; i++){
		arrOfStr[i] = Number(arrOfStr[i])
		if (highest < arrOfStr[i]){
			highest = arrOfStr[i]
		}
	}
	return highest
}

console.log(highestDigit(379)) // 9
console.log(highestDigit(2)) // 2
console.log(highestDigit(377401)) // 7