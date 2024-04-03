//Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date) {
	return (date.getFullYear()) &&
			(date.getMonth() === 11) &&
			(date.getDate() == 24);
}


console.log(timeForMilkAndCookies(3023))

// Unsolved Code
// Can't get running in visual studio code even though the code worked when entered through edabit