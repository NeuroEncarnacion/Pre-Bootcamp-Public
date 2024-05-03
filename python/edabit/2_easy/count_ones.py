# Count the amount of ones in the binary representation of an integer. For example, since 12 is 1100 in binary, the return value should be 2.

# Examples:
# count_ones(0) ➞ 0

# count_ones(100) ➞ 3

# count_ones(999) ➞ 8

# Notes:
# The input will always be a valid integer (number).


def count_ones(num):
	binary = bin(num)
	length = str(binary)
	count = 0
	for i in length:
		if i == "1":
			count += 1 
	return count 


print(count_ones(0)) # 0
print(count_ones(100)) # 3
print(count_ones(999)) # 8