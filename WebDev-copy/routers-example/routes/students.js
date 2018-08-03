const studentRoute = require("express").Router();

let studentArr = [ //Student Array
    {Name : "Kushagra Seth", College : "IPU", Year : "IV" },
    {Name : "Kartik Anand", College : "DTU", Year : "I" },
    {Name : "Drishti Seth", College : "AIIMS", Year : "III" },
    {Name : "Ambati Rayudu", College : "IPU", Year : "II" }
]

// GET Requests (data sent as part of URL)
studentRoute.get("/", (req,res, next) => res.send(studentArr));

studentRoute.get("/add", (req, res , next) =>{   // To add a Student in studentArr
    studentArr.push({
        Name : req.query.name,
        College : req.query.college,
        Year : req.query.year
    })
    res.send(studentArr);
})

studentRoute.get("/del", (req, res , next) =>{   // To delete a Student in studentArr
    studentArr.pop();
    res.send(studentArr);
})

studentRoute.get("/:id", (req,res, next) => res.send(studentArr[req.params.id]));

//--------------------------------------------------------------------------------------------

//POST Requests(data sent as part of body)

studentRoute.post("/", (req,res, next) => res.send(studentArr));

studentRoute.post("/add", (req, res , next) =>{   // To add a Student in studentArr
    studentArr.push({
        Name : req.body.name,
        College : req.body.college,
        Year : req.body.year
    })
    res.send(studentArr);
})

studentRoute.post("/:id", (req ,res , next) => res.send(studentArr[req.body.id]));

module.exports = studentRoute;