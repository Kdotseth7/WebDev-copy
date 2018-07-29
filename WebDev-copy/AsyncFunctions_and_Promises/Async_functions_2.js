
function task(gunna){
    console.log("We are doing work");  //1
    setTimeout(gunna,1000);
}

function done(){
    console.log("Task was done my homie") //3
}

task(done);

console.log("We did a task"); //2