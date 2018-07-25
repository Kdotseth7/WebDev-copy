var x = 10;

function myFunction() {
    var x = 20;
    x += 1;
    console.log("Line6: "+ x);
    if(true)
    {
        var x = 30; // scope is limited to the function not the block
        x += 1;
        console.log("Line11: "+ x);
    }
    console.log("Line13: "+ x);
}

myFunction();

console.log("Line18: "+ x);