# Remove Blanks
# Create a function that, given a string, returns all of that string’s contents, but without blanks.
# If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

def remove_blanks(str):
    str = str.split(' ')
    for i in range(len(str)):
        if str[i] == ' ':
            for j in range(i, len(str)-1):
                temp=str[j]
                str[j]=str[j+1]
                str[j+1]=temp
            str[:-1]
    return_str=''
    for char in str:
        return_str+=char
    print(return_str)

# remove_blanks(" Pl ayTha tF u nkyM usi c ")


# Get Digits
# Create a JavaScript function that given a string, returns the integer made from the string’s
# digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

def getDigits(str):
    digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    str_arr = list(str)

    i=0
    while(i < len(str_arr)-1):
        if str_arr[i] not in digits:
            for j in range(i,len(str_arr)-1):
                temp=str_arr[j]
                str_arr[j]=str_arr[j+1]
                str_arr[j+1]=temp
            str_arr.pop()
        i+=1
    return_str=''
    for char in str:
        return_str+=char
    print(return_str)

# getDigits("0s1a3y5w7h9a2t4?6!8?0")


# Acronyms
# Create a function that, given a string, returns the string’s acronym (first letters only, capitalized).
# Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW".
# Given "Live from New York, it's Saturday Night!", return "LFNYISN".

def acronyms(str):
    str_arr=str.split(' ')
    return_arr = []
    for word in str_arr:
        if word != ' ':
            return_arr.append(word[0])
    return_str=''
    for char in return_arr:
        return_str+=char.upper()
    return return_str

acronyms(" there's no free lunch - gotta pay yer way. ")
# Zip Arrays into Dictionary
# Dictionaries are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.

def zip(arr1, arr2):
    dict = {}
    for i in range(len(arr1)):
        dict[str(arr1[i])]=arr2[i]
    return dict


# Invert Hash
# Dictionaries are also called hashes (we’ll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys.
# Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high":"charm", "dicey": "morals"}.

def invert_hash(dict):
    new_dict = {}
    for key,value in dict.items():
        new_dict[value]=key
    return new_dict