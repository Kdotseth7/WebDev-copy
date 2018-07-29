
 /*To use file system in NodeJS, we have to import that
 library using require*/

 // Other available NodeJS Libraries : https://nodejs.org/api/index.html

const fs = require("fs");

/*fs.writeFile(file, data[, options], callback)

->file <string> | <Buffer> | <URL> | <integer> filename or file descriptor
->data <string> | <Buffer> | <Uint8Array>
->options <Object> | <string>
    -->encoding <string> | <null> Default: 'utf8'
    -->mode <integer> Default: 0o666
    -->flag <string> See support of file system flags. Default: 'w'.
->callback <Function>
    -->err <Error>

Asynchronously writes data to a file, replacing the file if it already exists. data can be a string or a buffer
The encoding option is ignored if data is a buffer.*/


 fs.writeFile("myfile.txt", "some data", function (err) {
     if(err) throw err ;
     console.log("File was written");
 })

  //To write into  a file in same dir use __dirname
 fs.writeFile(__dirname + "/mySecondFile.txt", "some more data", function (err) {
     if(err) throw err ;
     console.log("Second File was written");
 })