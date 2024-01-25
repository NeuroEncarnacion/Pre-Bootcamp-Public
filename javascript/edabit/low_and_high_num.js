// Find the lowest and highest numbers and insert them into an array

function minMax(arr){
    var lowest = arr[0];
    var highest = arr[0];
    var emptyArr = [];
    for (var i=1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    for (var i=1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }
    emptyArr.push(lowest)
    emptyArr.push(highest)
    return emptyArr
}


// Easier way to accomplish this algo


// function minMax(arr){
//     var lowest = arr[0];
//     var highest = arr[0];
//     var emptyArr = [];
//     for (var i=1; i < arr.length; i++) {
//         if (arr[i] < lowest) {
//             lowest = arr[i];
//         }
//         if (arr[i] > highest) {
//             highest = arr[i];
//         }
//     }
//     emptyArr.push(lowest)
//     emptyArr.push(highest)
//     return emptyArr
// }


console.log(minMax([10, 5, 7, 1, 3, 9, 15, 19]))


// Inserting the (if statement), that finds the (highest number in an array), into the first (for loop) we have will simplify and shorten our code. This is better than writing an additional (for loop) that handles the an another if statement computation when it can all be done in one loop. 