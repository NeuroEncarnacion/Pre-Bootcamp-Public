/* 
A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance.
*/ 

/*
Notes
1. Distance will be a number greater than zero.
2. Return 100 if the calculated fuel turns out to be less than 100. 
*/

function calculateFuel(n) {
	if (n < 10){
		return 100
	} else {
		return n * 10
	}
}

console.log(calculateFuel(15)) //150
console.log(calculateFuel(23)) //230
console.log(calculateFuel(3.14)) //100
