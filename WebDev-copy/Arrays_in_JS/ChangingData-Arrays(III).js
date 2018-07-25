//Changing Data - Arrays III
let  notes = ["sa", "re", "ga", "ma", "pa", "dha", "ni" ,"sa"];

//slice(a,b) method
console.log(notes.slice(2,4)); //doesn't mutate the original array
console.log("------------------------------");
/*splice(a,b,var1,var2,....,varN) where a=starting index
  and b=no. of elements to be removed or replaced */

//1.To remove elements from an array
let str = notes.splice(3,5); //mutates the original array
console.log(str);
console.log(notes);

//2.To replace elements from an array
let str = notes.splice(3,5,"ta","ra","ra"); //mutates the original array
console.log(str);
console.log(notes);

console.log("------------------------------");
//concat(str) is used to merge/concatenate 2 strings
console.log(notes.concat([1,2,3]));