const express = require("express"); //Include the Express downloaded modules

const server = express(); // It creates the server

/* Get Request */
// req : request sent by client to server
// res : response that server will send to client
// next : used to call next such funcN

server.get("/"/*a*/, /*b*/ function (req, res, next) {  //These functions are called "Middlewares"
    console.log("YO"); // will only run we get a request
    res.send("Hello! World"); // Server sends data back to client as response
})
/* "b" will run only so that we can send the response using res object
    when we get a request in "a" */




//server.listen() method creates a listener on the "specified port or path".
//In other words, it opens the port
server.listen(1212); //Port = 1212

/*localhost: 1212 " */
//localhost means i m using browser on my on computer
