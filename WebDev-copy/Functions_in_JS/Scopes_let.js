let x = 10;

function myFunction() {
    let x = 20;
    x += 1;
    console.log("Line6: "+ x);
    if(true)
    {
        let x = 30; // scope is limited to the block
        x += 1;
        console.log("Line11: "+ x);
    }
    console.log("Line13: "+ x);
}

myFunction();

console.log("Line18: "+ x);

/*
let y = 10;
function f() {
    console.log(y);
}
f();*/
