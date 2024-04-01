/*
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
Example: largestSwap(27) ➞ false, largestSwap(43) ➞ true

If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

Numbers with two identical digits (third example) should yield true (you can't do better)
*/

function largestSwap(num) {
	const arr = []
	var num_string = num.toString()
	arr.push(num_string[0])
	arr.push(num_string[1])
	var temp1 = arr.pop()
	var temp2 = arr.pop()
	arr.push(temp1 + temp2)
	var newNum =+arr[0]
	if (newNum == num){
		return true
	} else if (newNum > num) {
		return false
	} else {
		return true
	}
}

console.log(largestSwap(14)) // false
console.log(largestSwap(53)) // true