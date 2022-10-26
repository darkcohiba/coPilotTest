//add numbers and return the sum of the numbers squared
function sumOfSquares(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i * i;
    }
    return sum;
}

