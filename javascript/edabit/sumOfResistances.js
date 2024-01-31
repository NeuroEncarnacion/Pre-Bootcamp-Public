/**
 * When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is: RT = R1 + R2 + R3 ...
 * Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).
 */

function seriesResistance(arr) {
	var totalResistance = 0 
	for (i = 0; i < arr.length; i++){
		totalResistance += arr[i]
	}
	if (totalResistance <= 1){
		return String(totalResistance) + " ohm"
	} else {
		return String(totalResistance) + " ohms"
	}
}

// console.log(seriesResistance([10, 12, 32, 4.9, 5, 6, 71])) ; "140.9 ohms"
