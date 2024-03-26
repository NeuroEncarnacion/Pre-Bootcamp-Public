# Create a function that removes the first and last characters from a string.

# Examples:
# remove_first_last("hello") ➞ "ell"

# remove_first_last("maybe") ➞ "ayb"

# remove_first_last("benefit") ➞ "enefi"

# remove_first_last("a") ➞ "a"

# Notes:
# If the string is equal to or fewer than 2 characters long, return the string itself.


def remove_first_last(str)
	string_len = str.length
	if string_len <= 2
		return str
	else
		updated_str = str[1..-2]
		return updated_str
	end
end

