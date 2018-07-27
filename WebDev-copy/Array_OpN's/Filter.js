/*
filter() method creates a new array with all elements
that pass the test implemented by the provided function.
*/
let arr = [1, 2, 8, 88, 44, 77, 37, 99 ];

function divisibleByTwo(item) {
    if ( item % 2 === 0) {
        return (true);
    }
    else {
        return (false);
    }
}

console.log("Numbers divisible by 2: " + arr.filter(divisibleByTwo));
