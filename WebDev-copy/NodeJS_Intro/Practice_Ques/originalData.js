
const fs = require("fs");

fs.readFile(__dirname + "/sampleFile.txt", function (err, data) {

    if (err) {
        throw err;
    }

    let catCounter = 0;
    let dogCounter = 0;
    let ratCounter = 0;
    let monkeyCounter = 0;
    let mouseCounter = 0;


    data1 = data.toString();


   /* console.log(data1);
    console.log(typeof data1);*/

    if (data1.match(/cat/gi)) {
        catCounter++;
    }


    if (data1.indexOf("dog") !== -1) {
        dogCounter++;
    }

    if (data1.indexOf("rat") !== -1) {
        ratCounter++;
    }

    if (data1.indexOf("monkey") !== -1) {
        monkeyCounter++;
    }

    if (data1.indexOf("mouse") !== -1) {
        mouseCounter++;
    }

    console.log(catCounter)
    console.log(monkeyCounter)
});

