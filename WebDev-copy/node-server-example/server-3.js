const express = require ( "express" );

const server3 = express() ;

server3.get( "/greet/:tod/:name", function (req, res, next) { //If we write anything with colon(:) in url, it becomes a variable
    //so, tod & name are variables

    let tod = "Morning";
    switch (req.params.tod) {
        case "Morning" : tod = "Morning";
                         break;
        case "Evening" : tod = "Evening";
                         break;
    }
    let greeting = "Good " + tod +"! " + req.params.name ; //req.parameters.<variable-name> to use the variable
    res.send(greeting);
})

server3.listen(8585);

/*localhost:8585/greet/Evening/Drishti*/
