//Declaring Strings
let p = "my";
console.log(p);

console.log("------------------");

/* Templates in JS are declared using ${} & enclosed by
    the back-ticks ` ` and act as placeholders */
let q = `drive slow ${p} homie`;
console.log(q); // SolN: drive slow my homie

console.log("------------------");

//Searching a string within a string using funcN's

let str1 = "This is an easy job" ;
console.log(str1.indexOf("is"));     //Overloaded funcN
console.log(str1.indexOf("is",3));

console.log("\n");

let str2 = "aba aabb ab bbaab aa" ;
console.log(str2.lastIndexOf("ab"));     //Overloaded funcN
console.log(str2.lastIndexOf("ab",14));
