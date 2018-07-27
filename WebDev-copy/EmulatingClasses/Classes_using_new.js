
function Person (name, age) {
    this.firstName = name.split(" ")[0];
    this.lastName = name.split(" ")[1];
    // "age" is like a private variable and "name" is like a public variable
    this.isAdult = function () {
        return (age > 18);
    }
}
let p1 = new Person("Sheetal Seth", 47);
console.log(p1);
console.log(p1.isAdult());

let p2 = new Person("Drishti Seth", 15);
console.log(p2);
console.log(p2.isAdult());
