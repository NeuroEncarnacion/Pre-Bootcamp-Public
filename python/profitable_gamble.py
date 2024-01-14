# Create a function that takes three arguments (prob, prize, pay) and returns True if prob * prize > pay; otherwise return False

def profitable_gamble(prob, prize, pay):
    prob_prize = prob * prize
    if prob_prize > pay:
        return True
    else:
        return False

print(profitable_gamble(0.2,50,9))

# A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.