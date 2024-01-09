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

console.log(minMax([10, 5, 7, 1, 3, 9, 15, 19]))