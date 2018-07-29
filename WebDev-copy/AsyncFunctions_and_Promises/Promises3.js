
//Promise Chaining

let cleanRoom = function () {
    return new Promise(function (resolve,reject) {
        resolve("Cleaned the room");
    })
}

let removeGarbage = function (msg) {
    return new Promise(function (resolve,reject) {
        resolve(msg + ", Removed the garbage");
    })
}


let winIceCream = function (msg) {
    return new Promise(function (resolve,reject) {
        resolve(msg + ", Won Ice Cream");
    })
}


cleanRoom().then(function (fromResolveCR) {
    return removeGarbage(fromResolveCR);   // Return the promise removeGarbage() when cleanRoom() is resolved so that
                              // that removeGarbage() becomes the new promise
}).then(function (fromResolveRG) {
    return winIceCream(fromResolveRG);   // Return the promise winIceCream() when removeGarbage() is resolved so that
                              // that winIceCream() becomes the new promise
}).then(function (fromResolveWI) {
    console.log(fromResolveWI + " x---x FINISHED !") //Print FINISHED as all promises are resolved
})