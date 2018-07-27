
let arr = [ 33, 77, 3, 4, 1, 69, 100, 47, 12 ] ;
console.log("Lexicographical Sort: ");
console.log( arr.sort() ); //JS by default does Lexicographical Sort
//sort() is a Higher Order Function so it takes a funcN as arguement

//[ 1, 100, 12, 3, 33, 4, 47, 69, 77 ]

// Insertion Sort using sort() method

function compareFunction(a, b) {
    return( a-b );
}
function compareFunctionForDesc(a, b) {
    return( b-a );
}

console.log("----------------------------------------");

console.log("Ascending Sort: ");
console.log(arr.sort(compareFunction));

console.log("----------------------------------------");

console.log("Descending Sort: ");
console.log(arr.sort(compareFunctionForDesc));

//[ 1, 3, 4, 12, 33, 47, 69, 77, 100 ]

// Sort by unit digit

function compareFunctionForUD(a, b) {
    return( (a%10) - (b%10) );
}

console.log("----------------------------------------");

console.log("Ascending Sort by Unit's Digit: ");
console.log(arr.sort(compareFunctionForUD));