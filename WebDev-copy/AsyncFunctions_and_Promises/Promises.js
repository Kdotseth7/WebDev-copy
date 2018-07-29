/* The Promise object represents the eventual completion
   (or failure) of an asynchronous operation, and its resulting
   value.

   A Promise is in one of these states:

    (*)pending: initial state, neither fulfilled nor rejected.
    (*)fulfilled: meaning that the operation completed successfully.
    (*)rejected: meaning that the operation failed. */

/* Procedure :

    1.) Create a Promise constructor using new keyword which takes a callback function
        as arguement. Callback function has 2 parameters :
        -> resolve  -- means promise has been fulfilled
        -> reject   -- means promise is rejected

    2.) -then() method is only called when promise is resolved
        -catch() method is only called when promise us rejected

 */


let cleanMyRoom = new Promise( function (resolve, reject) {

    let isClean = false;

    if(isClean)
    {
        resolve("clean !");
    }
    else
    {
        reject("still dirty (-_-) ");
    }
})

cleanMyRoom.then(function (fromResolve) {
    console.log("The room is " + fromResolve);
}).catch(function (fromReject) {
    console.log("The room is "+ fromReject);
})

