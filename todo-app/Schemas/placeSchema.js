const mongoose = require("mongoose");

const placeSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Place = new mongoose.model("Place", placeSchema);
module.exports = Place;
