// Normal Function

function createBicycle(make, cadence, gear) {
    let obj = {};
    obj.make = make;
    obj.cadence = cadence;
    obj.gear = gear;
    return (obj );
}

let bicycle1 = createBicycle("Honda", 60, 5);
console.log(bicycle1);

// Constructor Function


function Bicycle(make, cadence, gear) {  //Don't use camelCase to specify its a contructor
    //let this = {}; Assume that JS adds this line itself
    this.make = make;
    this.cadence = cadence;
    this.gear = gear;
    //return (obj ); Assume that JS adds this line itself
}

let bicycle2 = new Bicycle("Hero", 80, 6); //use new operator to use the function as a constructor