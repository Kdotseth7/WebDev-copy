/*Loose equality ("double equals") using ==
== will perform a type conversion when comparing two things*/
console.log(1 == "1");  // SolN: true


/*Strict equality (or "triple equals" or "identity") using ===
=== will do the same comparison without type
conversion (by simply always returning false if the types differ) */
console.log(1 === "1"); //SolN: false

console.log("----------------------------");

//Automatic Type Conversion
/* "" can be typecast(TC) to 0, [] can be typecast to "" */

console.log((1 + "1") == 11); // SolN: true
console.log("11" - 1 == 1); // SolN: false
console.log([] == ""); // SolN: true
console.log([] == 0); // SolN: true( [] TC to "" and then "" TC to 0)

console.log({} + []);  // 0
console.log([] + {}); // object Object