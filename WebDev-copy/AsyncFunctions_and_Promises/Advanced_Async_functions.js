
let a = false;

function lasVegas()
{
    a = true;
}
setTimeout(lasVegas, 1000); // this statement will never execute as
                            // Interpreter never comes out of while loop

while (!a)
{
    console.log(1);
}
