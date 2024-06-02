# Create a function that returns True if a string is empty and False otherwise.

# Examples:
# is_empty("") ➞ True

# is_empty(" ") ➞ False

# is_empty("a") ➞ False

# Notes:
# A string containing only whitespaces " " does not count as empty.
# Don't forget to return the result.



def is_empty(s):
	length = len(s)
	if length == 0:
		return True 
	else:
		return False


print(is_empty("")) # True
print(is_empty(" ")) # False 
print(is_empty("a")) # False