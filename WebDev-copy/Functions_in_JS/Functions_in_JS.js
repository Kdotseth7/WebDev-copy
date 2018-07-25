//Declaring  a Function in JS
function add(x, y, z) {
    let sum = x + y + z;
    return(sum);
}

console.log("Sum of the 3 numbers: " + add(10,50,30));

console.log(add("Wow","Now","How")); // SolN : WowNowHow

console.log(add("Hello",2,"All")); /* 2 is typecast in to string
                                      SolN : Hello2All */

console.log(add(true,true,false)); /* true is typecast into 1 & false is typecast into 0
                                      1 +  1 + 0 = 2 */