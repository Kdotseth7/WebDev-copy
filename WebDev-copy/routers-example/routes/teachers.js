const teacherRoute = require("express").Router();

let teacherArr = [ //Teacher Array
    {Name : "Vinay Saini", Subject : "Java"},
    {Name : "Shreya Arora", Subject : "Algorithms"},
    {Name : "Arnav Gupta", Subject : "WebDev with Node JS"},
]

// GET Requests (data sent as part of URL)
teacherRoute.get("/", (req,res, next) => res.send(teacherArr));

teacherRoute.get("/:id", (req,res, next) => { // since id is a wildcard{same thing can be done in studentoute also}
    if(isNaN(parseInt(req.params.id))){
        next();
    }
     res.send(teacherArr[req.params.id]);
    
});  

teacherRoute.get("/add", (req, res , next) =>{   // To add a Teacher in teacherArr
    teacherArr.push({
        Name : req.query.name,
        Subject : req.query.subject
    })
    res.send(teacherArr);
})

teacherRoute.get("/del", (req, res , next) =>{   // To delete a  Teacher in teacherArr
    teacherArr.pop();
    res.send(teacherArr);
})

//--------------------------------------------------------------------------------------------

//POST Requests(data sent as part of body)

teacherRoute.post("/", (req,res, next) => res.send(teacherArr));

teacherRoute.post("/add", (req, res , next) =>{   // To add a Teacher in teacherArr
    teacherArr.push({
        Name : req.body.name,
        Subject : req.body.subject
    })
    res.send(teacherArr);
})

teacherRoute.post("/:id", (req, res, next) =>{
    res.send(teacherArr[req.body.id])
})

module.exports = teacherRoute ;