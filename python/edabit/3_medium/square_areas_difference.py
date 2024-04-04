#Imagine a circle and two squares: a smaller one and a bigger one. For the smaller square, the circle is a circumcircle and for the bigger one, an incircle.

#Create a function that takes an integer (radius of the cirlce) and returns the difference of the areas of the two squares.

# Examples:
# square_areas_difference(5) ➞ 50

# square_areas_difference(6) ➞ 72

# square_areas_difference(7) ➞ 98

# Notes: 
# Only use positive integer parameters


def square_areas_difference(r):
    return (2 * r ** 2)


print(square_areas_difference(5)) # 50
print(square_areas_difference(6)) # 72
print(square_areas_difference(7)) # 98