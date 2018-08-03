const express = require("express");
const server = express(); // Created Server

const todoImport = require("./todo");

server.use("/todos", express.json());
server.use("/todos", express.urlencoded({ extended : true }));

server.use("/todos", todoImport);

server.listen(2511);