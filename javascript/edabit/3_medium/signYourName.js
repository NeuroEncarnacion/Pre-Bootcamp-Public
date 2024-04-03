/*
The police send you the electronic statement again for you to sign. This time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well. Unfortunately, the document is still protected against new entries...

This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't use a return statement, it is already included. Your task is, given an object, prevent new properties from being added to that object, but you should still be able to change the value of the existing properties.

Examples
const obj = { yourSignature: "" };

signYourName( obj ) {
// write your code here
    obj.yourSignature = "Whatever";
    obj.spouseSignature = "Nice Try";
    return obj;
} ➞ { yourSignature: "Whatever" }

Notes
If you have suggestions on how to present or further test this challenge please leave a comment.
This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.
*/


function signYourName(obj) {
	//my code start
    Object.preventExtensions(obj)
	//my code end
    obj.yourSignature = "Whatever";
	obj.spouseSignature = "Nice Try"
    return obj;
}

console.log(signYourName({yourSignature: ""}))
