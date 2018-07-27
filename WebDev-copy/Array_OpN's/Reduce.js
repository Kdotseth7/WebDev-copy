
//Reduce

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function summationArray(accum, item) {
    return ( accum + item );
}

console.log("Summation of Array: " + arr.reduce(summationArray));

console.log("-----------------------------------");

function factorialEight(accum, item) {
    return ( accum * item );
}

console.log("Factorial of Eight [8!] : " + arr.reduce(factorialEight));