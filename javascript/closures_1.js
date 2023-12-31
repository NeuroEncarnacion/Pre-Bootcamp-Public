// Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
    return () => str;
}

redundant("pear")

// Learning how this function works
// From edabit

/* Other solution

function redundant(str) {
	return function() {
		return str;
	}
}

*/

// "Your redundant function should simply return the variable fun instead of calling fun then returning that value." - Moonesh , Edabit 