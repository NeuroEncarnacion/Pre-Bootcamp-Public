# Given the radius of a circle and the area of a square, return True if the circumference of the circle is greater than the square's perimeter and False if the square's perimeter is greater than the circumference of the circle.


import math # import math allows us to use the pi value in our code

def circle_or_square(rad, area): 
	circ = 2 * math.pi * rad # This line finds the circumference using the radius of a circle 
	i = 0 # Declaring the variable for the while to run off of
	while (i * i != area):
		i += 1 # Multiplying i against itself until it equals (area) will give us the square root of the area
	peri = i * 4 # We then multiply i or the square of the area by 4 to find the perimeter of the square
	if (circ > peri): # we then use an if else statement to determine if the circ. is greater than the peri.   
		return True
	else:
		return False

print(circle_or_square(1, 4))