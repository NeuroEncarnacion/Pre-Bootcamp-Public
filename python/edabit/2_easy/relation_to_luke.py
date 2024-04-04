# Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

def relation_to_luke(name):
	if name == "Darth Vader":
		return "Luke, I am your father."
	elif name == "Leia":
		return "Luke, I am your sister."
	elif name == "Han":
		return "Luke, I am your brother in law."
	elif name == "R2D2":
		return "Luke, I am your droid."
	else:
		return "Luke, I am a stranger."


