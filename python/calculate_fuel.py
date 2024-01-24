# A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
# Create a function which calculates the amount of fuel it needs, given the distance.

# Distance will be a number greater than zero. | Return 100 if the calculated fuel turns out to be less than 100.

def calculate_fuel(n):
	distance = n * 10
	if distance < 100:
		return 100
	else: 
		return distance
