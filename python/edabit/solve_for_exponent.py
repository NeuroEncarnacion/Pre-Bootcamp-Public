# Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.


def solve_for_exp(a, b):
	c = a 
	power = 1
	while c != b:
		c *= a 
		power += 1
	return power


print(solve_for_exp(4, 1024)) # 5
print(solve_for_exp(9, 3486784401)) # 10
print(solve_for_exp(19, 47045881)) # 6

