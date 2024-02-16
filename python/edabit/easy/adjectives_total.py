# You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given a dictionary of insults, return the total amount of insults used.
# The dictionary will never be empty
import random

def total_amount_adjectives(dct):
	total_insults = 0
	for item in dct:
		total_insults += 1
	return total_insults

obj2 = { 'a': "moron", 'b': "scumbag", 'c': "moron", 'd': "dirtbag" }

# rand=random.randint(10,20)
# dynamic={i:j for i,j in list(map(lambda x:(chr(65+x),x),list(range(rand))))}


print(total_amount_adjectives(obj2))
# print(total_amount_adjectives(dynamic))