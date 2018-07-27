
// Square Map
let arr = [1, 2 ,3 ,4 ,5 ,6 ,7 , 9, 10];

function mapSquare(item) {
    return ( item*item );
}
console.log("Map(square): " + arr.map(mapSquare));

console.log("----------------------------------------");

//Square Root Map
let arr2 = [1 ,400 ,9 ,16 ,225 ,36 ,169 ,64 ,81 ,100];

console.log("Map(square root): " + arr2.map(Math.sqrt));
