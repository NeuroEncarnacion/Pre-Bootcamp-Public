# Create a function that takes an array containing only numbers and return the first element.

# Examples:
# get_first_value([1, 2, 3]) ➞ 1

# get_first_value([80, 5, 100]) ➞ 80

# get_first_value([-500, 0, 50]) ➞ -500

# Notes:
# The first element in an array always has an index of 0.


def get_first_value(arr)
	return arr[0]
end

print(get_first_value([5, 7, 100]))

