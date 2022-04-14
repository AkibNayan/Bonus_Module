/**
 * Iterative method to find factorial
 */
function IterativeFactorial(num) {
    if (num == 0) {
        return 1;
    }
    var fact = 1;
    for (var i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}
var result = IterativeFactorial(1);
console.log(result);

/**
 * Recursive Method to find factorial
 */
function recursiveFactorial(num) {
    if (num < 0) {
        return -1;
    }
    else if (num == 0) {
        return 1;
    }
    else {
        return num * recursiveFactorial(num - 1);
    }
}
var recursive = recursiveFactorial(5);
console.log(recursive);
