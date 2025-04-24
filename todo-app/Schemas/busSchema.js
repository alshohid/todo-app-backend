    const mongoose = require("mongoose");

    const busSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    source: {
        type: String,
        required: true,
        trim: true,
    },
    destination: {
        type: String,
        required: true,
        trim: true,
    },
    stops: [
        {
        type: String,
        trim: true,
        }
    ],
    departureTime: {
        type: String,
    },
    arrivalTime: {
        type: String,
    },
    fare: {
        type: Number,
    }
    }, {
    timestamps: true,
    });

    const Bus = new mongoose.model("Bus", busSchema);
    module.exports = Bus;
