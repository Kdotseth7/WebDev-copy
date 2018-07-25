//Declaring an Array
//Arrays in JS are heterogeneous
let arr = [1, 2, 3];
console.log(arr);

let array = [10, true, "Hello!", [2, 3]];
console.log(array);

let arr2 = [7, [7,9,8], false, "Voila"];

console.log("-------------------------------------");

//for loop
for(let i=0; i<array.length; i++)
{
    console.log(arr2[i]);
}
console.log("``````````````````````````````````````");

//for-of loop
for(let val of arr2)
{
    console.log(val);
}
console.log("``````````````````````````````````````");
//for-of loop : The for/of loop, loops through the property values of an object.
for(let val of arr2)
{
    console.log(val);
}
console.log("``````````````````````````````````````");
//for-in loop : The for/in loop, loops through the property index of an object.
for(let index in arr2)
{
    console.log(index);
}