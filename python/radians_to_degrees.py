# Create a function that takes an angle in radians and returns the corresponding angle in degrees rounded to one decimal place

def radians_to_degrees(rad):
    degrees = rad * 57.295779513
    return round(degrees, 1)

print(radians_to_degrees(20))