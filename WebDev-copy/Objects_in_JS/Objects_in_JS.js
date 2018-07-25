//Declaring an object
let obj = {
    a: 10,
    b: "Adios",
    c: false,
    d: {        //Object within an object
        p: 7,
        q:true,
        r: {
            x: "Lmao"
        }
    }
}

console.log("Value of prop. b: " + obj.b);
console.log("Value of prop. q: " + obj.d.q);
console.log("Value of prop. x: " + obj.d.r.x);

//Add new property to the object
obj.e = "#HalaMadrid";

//Deleting property of an object
delete obj.c;

//To view prop. of an object
console.log(obj);