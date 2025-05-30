const express = require("express");
const router = express.Router();

const registrationHandler = require("../apiUtility/registrationHanlder");
const loginHandler = require("../apiUtility/loginHandler");

router.post("/signup", registrationHandler);
router.post("/login", loginHandler);

module.exports = router;
