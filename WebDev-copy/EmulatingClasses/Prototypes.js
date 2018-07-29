//Emulating INHERITANCE using Prototypes

/*__proto__ is read-only*/

let p = {
    a : 10,
    b : 25
}

let q = Object.create(p);  //q contains prototype of p
q.c = 40;                  //so, it can access properties
                           //of p

let r = Object.create(q); //r contains prototype of q
r.d = 77;                 //so, it can access properties
                          //of q
console.log(p);
console.log(q);
console.log(r);

console.log("----------------------");

console.log("p-->")
console.log(p.a);
console.log(p.b);

console.log("q-->")
console.log(q.c);
console.log(q.a);
console.log(q.b);

console.log("r-->")
console.log(r.d);
console.log(r.c);
console.log(r.a);
console.log(r.b);

console.log("----------------------");

//Run in REPL ( Read-Eval-Print-Loop ) Interpreter

console.dir(p);
console.dir(q);
console.dir(r);
