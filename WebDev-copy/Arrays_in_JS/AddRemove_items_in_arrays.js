let fruits = ["mango", "apple"];

//Push and pop methods
fruits.push("kiwi","guava"); //PUSH
console.log(fruits);
fruits.pop(); //POP
console.log(fruits);

console.log("```````````````````````````````````````");

//Shift and unshift methods
/* shift() method removes the first element from an array
   and returns that removed element */
let firstElement = fruits.shift();
console.log(fruits);
console.log(firstElement);
console.log("\n")
/* unshift() method adds one or more elements to the
beginning of an array and returns the new length of the
 array. */
let fruitsLength = fruits.unshift("banana","grapes");
console.log(fruits);
console.log(fruitsLength);