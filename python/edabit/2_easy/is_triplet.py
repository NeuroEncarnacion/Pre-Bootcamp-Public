# Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.

# Examples:
# is_triplet(3, 4, 5) ➞ True
# 3² + 4² = 25
# 5² = 25

# is_triplet(13, 5, 12) ➞ True
# 5² + 12² = 169
# 13² = 169

# is_triplet(1, 2, 3) ➞ False
# 1² + 2² = 5
# 3² = 9

# Notes:
# Numbers may not be given in a sorted order.

def is_triplet(n1, n2, n3):
	numbers = [n1, n2, n3]
	sorted_num = sorted(numbers)
	num_1 = sorted_num[0]
	num_2 = sorted_num[1]
	num_3 = sorted_num[2]
	smallest_squared = (num_1 ** 2) + (num_2 ** 2)
	highest_squared =  num_3 ** 2 
	if highest_squared == smallest_squared:
		return True 
	else:
		return False


print(is_triplet(3, 4, 5)) # True
print(is_triplet(13, 5, 12)) # True
print(is_triplet(1, 2, 3)) # False