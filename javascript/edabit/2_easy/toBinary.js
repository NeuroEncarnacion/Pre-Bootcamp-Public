// Create a function that will take a HEX number and returns the binary equivalent (as a string).

// Examples:
// toBinary(0xFF) ➞ "11111111"

// toBinary(0xAA) ➞ "10101010"

// toBinary(0xFA) ➞ "11111010"

// Notes:
// The number will be always an 8-bit number.

function toBinary(num) {
	return (num >>> 0).toString(2);
}

console.log(toBinary(0xFF)) // 11111111
console.log(toBinary(0xAA)) // 10101010
console.log(toBinary(0xFa)) // 11111010