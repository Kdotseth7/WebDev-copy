const express = require ( "express" );

const server2 = express() ;

server2.get( "/greet/:name", function (req, res, next) { //If we write anything with colon(:) in url, it becomes a variable
    //so, name is a variable

    let greeting = "Good Morning!  " + req.params.name ; //req.parameters.<variable-name> to use the variable
    res.send(greeting);
})

server2.listen(4343);

/*localhost:4343/greet/Drishti*/
