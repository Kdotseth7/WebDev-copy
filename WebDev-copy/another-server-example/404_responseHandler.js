const express = require("express");
const srv = express();

srv.use("/a", (req, res, next) => res.send("Page A found"));

srv.use("/b", (req, res, next) => res.send("Page B found"));

srv.use("/", (req, res, next) => res.send("<h1>404: The page you're looking for doesn't exist!</h1>"));

srv.listen(989);