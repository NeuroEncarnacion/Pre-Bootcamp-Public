# Create a function that takes a list and returns the difference between the biggest and smallest numbers.

def difference_max_min(lst):
	max = lst[0]
	min = lst[0]
	for num in lst:
		if max < num:
			max = num
		if min > num:
			min = num
	return max - min

# print(difference_max_min([10,4,1,2,8,91]))