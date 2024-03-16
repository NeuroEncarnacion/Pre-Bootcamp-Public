# Write a function that takes a list of numbers and returns a list with two elements:

# The first element should be the sum of all even numbers in the list.
# The second element should be the sum of all odd numbers in the list.

# Example:
# sum_odd_and_even([1, 2, 3, 4, 5, 6]) ➞ [12, 9]
## 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9

# sum_odd_and_even([-1, -2, -3, -4, -5, -6]) ➞ [-12, -9])

# sum_odd_and_even([0, 0]) ➞ [0, 0])

# Notes:
# Count 0 as an even number.


def sum_odd_and_even(lst):
	arr = []
	even_total = 0
	odd_total = 0 
	for i in range(len(lst)):
		if i % 2 == 0:
			even_total += lst[i]
		else:
			odd_total += lst[i]
	arr.append(odd_total)
	arr.append(even_total)
	return arr

print(sum_odd_and_even([1, 2, 3, 4, 5, 6])) # [12, 9]
print(sum_odd_and_even([-1, -2, -3, -4, -5, -6])) # [-12, -9])

### REVISED CODE:
def sum_odd_and_even_2(lst):
	even_total = 0
	odd_total = 0 
	for i in range(len(lst)):
		if i % 2 == 0:
			even_total += lst[i]
		else:
			odd_total += lst[i]
	return [odd_total, even_total]
