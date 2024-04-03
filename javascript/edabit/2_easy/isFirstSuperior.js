/*
You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

Create a function that returns whether the first array is slightly superior to that of the second.

Examples
isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
1. The pair of items at each index are compared in turn.
2. 1 from the first array is the same as 1 from the second array.
3. 2 is the same as 2.
4. However, 4 is greater than 3, so first array is superior.

isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false

Notes:
1. Both arrays will be the same length.
2. All values and their counterparts will always be of the same data type.
3. If the two arrays are the same, return false.
*/

function isFirstSuperior(arr1, arr2) {
	if (arr1 == arr2){
		return false
	} else if (arr1 > arr2){
		return true
	} else {
		return false
	}
}

console.log(isFirstSuperior([1,2,4], [1,2,3])) //true