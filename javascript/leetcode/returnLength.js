/**
 *  Write a function argumentsLength that returns the count of arguments passed to it.
 */


/**
 * @param  {...(null|boolean|number|string|Array|Object)} args 
 * @returns {number}
 */

var argumentsLength = function(...args) {
    var totalArguments = 0
    for(var i=0; i<args.length; i++){
        totalArguments += 1
    }
    console.log(totalArguments)
};


// argumentsLength(1,2,3) ; 3

// argumentsLength({}, null, "3", true) ; 4
