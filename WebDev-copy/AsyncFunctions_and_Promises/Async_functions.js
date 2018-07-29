
function  done() {
    console.log("task was done");
}

setTimeout(done, 1000); //setTimeout will call funcN done() after 1000ms delay
// Delay is asynchronous in nature as other things can be done by CPU in those 1000ms

console.log("we did a task");


