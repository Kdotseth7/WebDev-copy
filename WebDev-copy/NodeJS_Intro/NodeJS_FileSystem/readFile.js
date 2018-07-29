/*
fs.readFile(path[, options], callback)

->path <string> | <Buffer> | <URL> | <integer> filename or file descriptor
->options <Object> | <string>
    -->encoding <string> | <null> Default: null
    -->flag <string> See support of file system flags. Default: 'r'.
->callback <Function>
    -->err <Error>
    -->data <string> | <Buffer>

Asynchronously reads the entire contents of a file*/

const fs = require("fs");

fs.readFile(__dirname + "/mySecondFile.txt", function (err, data) {
    if(err) throw err ;
    console.log(data); // buffer in Binary from
    console.log("--------------------------------------------------");
    console.log("Actual Data : " + data.toString()); // actual data
})