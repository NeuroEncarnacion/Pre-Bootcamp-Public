# Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

# To illustrate:

# largest_swap(27) ➞ false

# largest_swap(43) ➞ true
# If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

# Examples:
# largest_swap(14) ➞ false

# largest_swap(53) ➞ true

# largest_swap(99) ➞ true

# Notes:
# Numbers with two identical digits (third example) should yield true (you can't do better).


def largest_swap(num)
	str_num = num.to_s
	first_int = str_num.chr
	str_num = str_num[1..-1]
	new_str = str_num.concat(first_int)
	new_str = new_str.to_i

	if new_str < num 
		return true
	elsif new_str == num
		return true
	else
		return false
	end
end

print(largest_swap(27)) # false
print(largest_swap(43)) # true
print(largest_swap(14)) # false
print(largest_swap(53)) # true
print(largest_swap(99)) # true