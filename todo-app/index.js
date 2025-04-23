const express = require("express");
const mongoose = require("mongoose");
const todoApiHandler = require("./apiHandle/todoApiHandler");
const handleUserapiRoute = require("./apiHandle/userApiRoute")
const connected = require("./Db/connection");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const PORT = 4000;
app.use(express.json());

connected();
app.use("/todo", todoApiHandler);
app.use("/user", handleUserapiRoute)

app.listen(PORT, () => {
  console.log(`server started in port ${PORT}`);
});
