const express = require("express");
const mongoose = require("mongoose");
const todoApiHandler = require("./apiHandle/todoApiHandler");
const connected = require("./Db/connection");
const app = express();
const PORT = 4000;
app.use(express.json());

connected();
app.use("/todo", todoApiHandler);

app.listen(PORT, () => {
  console.log(`server started in port ${PORT}`);
});
