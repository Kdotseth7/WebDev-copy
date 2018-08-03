const express = require("express");
const server = express(); //Server Created

const teacherRoute = require("./routes/teachers");
const studentRoute = require("./routes/students");

server.use(express.json()); // express.json is a middleware which can decode the body of a req & turn it into JS object if body is encoded as json
server.use(express.urlencoded({ extended : true})); // express.json is a middleware which can decode the body of a req & turn it into JS object if body is encoded as url encoded format

server.use("/teachers", teacherRoute); /* teacherRoute and studentRoute are Middlewares on which we can
on which we can create more middlewares. These are called Routers */
server.use("/students", studentRoute);


server.listen(2233);