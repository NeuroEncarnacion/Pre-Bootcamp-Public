// From Edabit 
// Count and display how many values in the array is true
function countTrue(arr) {
    var total = 0
	for (var i = 0; i < (arr.length); i++){
        if (arr.length == 0){
            return 0
        } else {
            if (arr[i] == true){
                total += 1
            } 
        } 
	}
    return total
}


var arr = [true, false, false, true, true, false, false]

console.log(countTrue(arr))