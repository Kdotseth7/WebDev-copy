const express = require ( "express" );

const serverQuery = express() ;

serverQuery.get( "/greet/:tod", function (req, res, next) { //If we write anything with colon(:) in url, it becomes a variable
    //so, tod is a variable

    let tod = "Morning";
    switch (req.params.tod) {
        case "Morning" : tod = "Morning";
            break;
        case "Evening" : tod = "Evening";
            break;
    }
    let greeting = "Good " + tod +"! " + req.query.name ; //req.query.<variable-name> to use the variable from query
    res.send(greeting);
})

serverQuery.listen(66);

/*localhost:66/greet/Evening?name=Drishti

  whatever we write after ? a query
   eq : ?<variable-name=value> becomes  */

