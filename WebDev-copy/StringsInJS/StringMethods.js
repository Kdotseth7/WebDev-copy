//String Methods

//slice method
let largeStr = "this is a string";
let smallStr = largeStr.slice(2,9); /* slice(a,b) returns the string
                                       in the limit [a,b) */
let smallStr2 = largeStr.slice(-4,-1);

console.log("Sliced string: "+ smallStr);
console.log("Sliced string2: "+ smallStr2);

console.log("------------------");

let smStr = largeStr.substr(2,4);
let smStr2 = largeStr.substr(-4,4); /* substr(a,b) returns the string
                                       starting at posN a and of length= b */
console.log("Substring: "+ smStr);
console.log("Substring2: "+ smStr2);