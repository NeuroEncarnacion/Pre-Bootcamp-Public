// Find the lowest and highest numbers and insert them into an array

function minMax(arr){
    var lowHigh = []
    Math.min(arr).push(lowHigh)
    Math.max(arr).push(lowHigh)
    return lowHigh
}

console.log(minMax([0, 5, 7, 1, 3, 9, 15, 19]))