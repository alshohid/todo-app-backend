const express = require("express");
const busRouter = express.Router();
const busPostHandler= require("../apiUtility/busPostHandler")
const bustGetHandler= require("../apiUtility/bustGetHandler")
const  busSearchHandler = require("../apiUtility/busSearchHandler")
const busRoutePostHandler= require("../apiUtility/busRoutePostHandler")

busRouter.post('/',busPostHandler)
busRouter.get('/',bustGetHandler)
busRouter.get("/search",busSearchHandler)
busRouter.post("/route", busRoutePostHandler)




module.exports = busRouter