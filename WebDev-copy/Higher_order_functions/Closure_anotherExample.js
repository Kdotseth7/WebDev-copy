

function outerAdd(outer) {
    function innerAdd(inner) {
        let sum = outer + inner ;
        let ans = console.log("Outer + Inner : " + sum );
        return ans;
    }
    return innerAdd;
}

let first = outerAdd(5);
let finalAns = first(7);
