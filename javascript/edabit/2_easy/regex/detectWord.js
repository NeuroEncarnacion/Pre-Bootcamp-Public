/*
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

1. The wanted word is in lowercase.
2. The crowd of letters is all in uppercase.
3. Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
*/


function detectWord(str) {
	const regex = /[a-z]/g;
	const lowercaseLetters = str.match(regex);
	var newStr = ""
	for (var i = 0; i < lowercaseLetters.length; i++){
	    newStr +=	lowercaseLetters[i]
    }
	return newStr
}

console.log(detectWord("UcUNFYGaFYFYGtNUH")) // cat
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")) // embezzlement
console.log(detectWord("cLXSNVVJVOJBIQRVKIZWKJOIVHXELVReLXSNVVJVOJBIQRVKIZWKJOIVHXELVRrLXSNVVJVOJBIQRVKIZWKJOIVHXELVRtLXSNVVJVOJBIQRVKIZWKJOIVHXELVRaLXSNVVJVOJBIQRVKIZWKJOIVHXELVRiLXSNVVJVOJBIQRVKIZWKJOIVHXELVRn")) // certain
