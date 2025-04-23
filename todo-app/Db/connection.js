
require("dotenv").config();
const mongoose = require("mongoose");
const connection = async () => {
    try {
    await mongoose
        .connect(
            `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.uouhsop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        )
        console.log("mongodb connection successfully")
    } catch (error) {
        console.log(`mongodb connection error ${error.message}`)
    }
};
module.exports = connection
