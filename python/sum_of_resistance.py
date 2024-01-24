# When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is: RT = R1 + R2 + R3

# Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

def series_resistance(lst):
	total_resistance = 0
	for i in lst:
		total_resistance += i
	if total_resistance <= 1:
		return(str(total_resistance) + " ohm")
	else:
		return(str(total_resistance) + " ohms")

# print(series_resistance([10, 12, 32, 4.9, 5, 6, 71]))