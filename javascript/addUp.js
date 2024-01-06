function addUp(sum) {
    var value = 0;
    for (i = 0; i <= sum; i++){
        value += i;
    }
    return value;
}

console.log(addUp(5))