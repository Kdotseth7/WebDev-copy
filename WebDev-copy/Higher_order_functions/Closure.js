/*
A "CLOSURE" is an inner function that has access to the outer
 function’s variables in addition to it's own variables and
 global variables. The inner function has access not only to
 the outer function’s variables, but also to the outer
 function’s parameters. You create a closure by adding a
 function inside another function.
            It even  retains the access after the parent function has been
 closed. It makes it possible for a function to have "private" variables.
*/

function addNumbers(firstNumber, secondNumber)
{
    let retVal = "Sum is: ";
    function add() {  //add() has access to outer funcN variable:-retVal
        let sum = firstNumber + secondNumber ; //add() has access to outer funcN's parameters:-
                                               //firstNumber and secondNumber
        return retVal + sum ;
    }
    return add(); //return add {for 2nd and 3rd way}
}

console.log(addNumbers(10,20)); //1st way to execute closure
/*
console.log(addNumbers(40,50)()); //2nd way to execute closure
let myFunc = addNumbers(50,60); //3rd way to execute closure
console.log(myFunc());
*/
