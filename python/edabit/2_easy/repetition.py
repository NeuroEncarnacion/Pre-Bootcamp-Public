#Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

def repetition(txt, n):
	if n == 1:
		return txt
	else:
		return txt + repetition(txt, n-1)


print(repetition("soccer", 2)) # soccersoccer
print(repetition("ab", 3)) # ababab
