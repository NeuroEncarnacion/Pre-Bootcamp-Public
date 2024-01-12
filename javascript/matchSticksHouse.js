//  Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step.
// E.x. 1 step = 6 matchsticks, 2 steps = 11 matchsticks, 3 steps = 16 matchsticks

function matchHouses(step) {
	if (step == 0){ // If zero is entered in the steps then return 0
		return 0
	} else { // Otherwise multiply the number of steps by 5 then add 1 to get the amount of matchsticks used for the houses
		return step * 5 + 1
	}
}