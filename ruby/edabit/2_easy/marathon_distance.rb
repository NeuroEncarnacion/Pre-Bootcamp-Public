# Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

# Return true if the marathon is 25 miles long, otherwise, return false.

# Examples:
# marathon_distance([1, 2, 3, 4]) ➞ false

# marathon_distance([1, 9, 5, 8, 2]) ➞ true

# marathon_distance([-6, 15, 4]) ➞ true

# Notes:
# Items in the array will always be integers.
# Items in the array may be negative or positive, but since negative distance isn't possible, find a way to convert negative integers into positive integers.
# Return false if the arguments are empty or not provided.

def marathon_distance(arr)
	positive_array = arr.map(&:abs)
	array_sum = positive_array.inject(0, :+)
	if arr.length == 0
			return false
	elsif array_sum == 25
		return true
	else
		return false
	end
end

print(marathon_distance([1, 2, 3, 4])) # false
print(marathon_distance([1, 9, 5, 8, 2])) # true
print(marathon_distance([-6, 15, 4])) # true 