

function createCounter(initialVal, deltaVal) {
    let val = initialVal ;
    let counter = {
        incr : function () {
            val += deltaVal ;
            return val;
        },
        decr : function () {
            val -= deltaVal ;
            return val;
        },
        show : function () {
            console.log("Value is : " + val );
        }
    }
    return counter;
}

let a = createCounter(10, 20);
a.incr(); //30
a.incr(); //50
a.decr(); //30
a.show();

console.log("-------------------------");

console.log(typeof a);
console.log(typeof a.show);
console.log(typeof a.show());
