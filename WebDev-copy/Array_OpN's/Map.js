/*
map() method creates a new array with the results
of calling a provided function on every element in
the calling array.
*/

let arr = [ 88, 786, 90, 45, 2, 67 ] ;

function mapFunc(item) {
    return ( item-100 );
}

console.log("Map (-100): " + arr.map(mapFunc));