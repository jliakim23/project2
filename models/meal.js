const mongoose = require("../database/connection");

const mealSchema = new mongoose.Schema({
  caption: String,
  image: String,
  date: { type: Date, required: true},
},
{timestamps: true}
);

const Meal = new mongoose.model("Meal", mealSchema);

 module.exports =  Meal  ;