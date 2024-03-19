# Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!

# Given a dictionary of the stolen items and a string in lowercase representing the name of the pet (e.g. "rambo"), return:

# "Rambo is gone..." if the name is on the list.
# "Rambo is here!" if the name is not on the list.
# Note that the first letter of the name in the return statement is capitalized.

# Examples
#  items = {
#   "tv": 30,
#   "timmy": 20,
#   "stereo": 50,
# } ➞ "Timmy is gone..."
# Timmy is in the dictionary.


#  items = {
#   "tv": 30,
#   "stereo": 50,
# } ➞ "Timmy is here!"
# Timmy is not in the  dictionary.


#items = { } ➞ "Timmy is here!"
# Timmy is not in the dictionary.


def find_it(items, name):
	res = not bool(items)
	cap_name = name.capitalize()
	if res == True:
		return cap_name + " is here!"
	else:
		if name not in items:
			return cap_name + " is here!"
		else:
			return cap_name + " is gone..."

print(find_it({}, "neuro"))

print(find_it({
	"tv": 30,
	"stereo": 50,
}, "neuro"))

print(find_it({
	"tv": 30,
	"stereo": 50,
	"superman": 200
}, "superman"))
