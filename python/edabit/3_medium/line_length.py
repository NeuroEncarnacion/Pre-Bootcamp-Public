# Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

# Examples
# line_length([15, 7], [22, 11]) ➞ 8.06

# line_length([0, 0], [0, 0]) ➞ 0

# line_length([0, 0], [1, 1]) ➞ 1.41
# Notes
# The order of the given numbers is X, Y.
# This challenge is easier than it looks.
# Round your result to two decimal places.

import math
def line_length(dot1, dot2):
	step_1 = dot2[0] - dot1[0]
	step_2 = dot2[1] - dot1[1]
	step_3 = step_1 * step_1
	step_4 = step_2 * step_2 
	step_5 = step_3 + step_4 
	distance = math.sqrt(step_5)
	return round(distance, 2)

print(line_length([15, 7], [22, 11])) # 8.06
print(line_length([0, 0], [0, 0])) # 0.0 
print(line_length([0, 0], [1, 1])) # 1.41
