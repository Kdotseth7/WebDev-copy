const todoRApi = require("express").Router();

let taskDone = [
    {Task :"Light the Gas", Done : "Yes"},
    {Task :"Put the Utensil on the Stove", Done : "Yes"},
    {Task :"Wait for 10 mins", Done : "Yes"},
    {Task :"Get the utensil off the stove", Done : "No"},
];

//GET REQUEST - To display whole string ``
todoRApi.get("/", (req, res, next) => res.send(taskDone));

//POST REQUEST - To add an object in the array ``
todoRApi.post("/", (req, res, next) =>{
    taskDone.push({
        Task: req.body.task,
        Done : req.body.done
    })
    res.send(taskDone);
});

//GET REQUEST - To display a particular element of string ``
todoRApi.get("/:id", (req, res, next) =>{
    res.send(taskDone[req.params.id]);
});

//DELETE REQUEST - To delete an element from string ``
todoRApi.delete("/:id", (req, res, next) =>{
    taskDone.pop();
    res.send(taskDone);
});

//PATCH REQUEST - To modify a particular element 
todoRApi.patch("/:id", (req, res, next) =>{
    taskDone[req.params.id].push({
        Task: req.body.task,
        Done : req.body.done
    })
})

module.exports = todoRApi;