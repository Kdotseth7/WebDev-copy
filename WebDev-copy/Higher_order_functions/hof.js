/*
A higher-order function is a function that can take
another function as an argument, or that returns
a function as a result.
    HOF are also known as Call Back functions
*/


//1. Returns a function as a result

function getFirstName(name) {
    fName = name.split(" ")[0];
    function helloFirstName() {
        console.log("Hello " + fName );
    }
    return(helloFirstName);
}

let drishtiGreeter = getFirstName; //Reference to the funcN getFirstName
drishtiGreeter("Drishti Seth");

console.log("------------------");

//2. Takes function as a parameter

function nameDivider(fullName) {
    return(fullName.split(" ")[0]);
}

function greeter(findName, fullName)
{
    let firstName = findName(fullName);
    console.log("Hello " + firstName);
}

greeter(nameDivider, "Shimmer Seth");