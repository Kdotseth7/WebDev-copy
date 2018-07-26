
function createCounter(initValue, delta) {
    let val = initValue;
    function counter() {
        val += delta;
        return(val);
    }
    return(counter);
}

let fiveCount = createCounter(5,5);
let eightCount = createCounter(20,8);
console.log(fiveCount());
console.log(fiveCount());
console.log(fiveCount());
console.log("----------");
console.log(eightCount());
console.log(eightCount());
console.log(eightCount());