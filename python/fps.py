# Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

def frames(minutes, fps):
	total_seconds = minutes * 60
	return total_seconds * fps

# print(frames(52, 33))