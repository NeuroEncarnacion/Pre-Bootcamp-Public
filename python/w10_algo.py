# A Narcissistic Number is a positive number which is the sum of
# its own digits, each raised to the power of the number of digits
# in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
# For example, take 153 (3 digits), which is narcisstic:
# 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

def narcissistic(val):
    x = 0
    for v in str(val):
        # ** raising to exponent
        x += int(v)**len(str(val))
    if x == val:
        print(f"{x} is")
        # return True
    else:
        print("This is not")
        # return False
    # print(x)
narcissistic(407)