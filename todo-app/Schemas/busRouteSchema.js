const mongoose = require("mongoose");

    const routeSchema =  mongoose.Schema({
    source: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    stops: [
        {
        type: String,
        },
    ],
    });

    const BusRoute = new mongoose.model("Route", routeSchema);
    module.exports = BusRoute;
