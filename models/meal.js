const mongoose = require("../database/connection");
const { Schema } = mongoose;


const mealSchema = new mongoose.Schema({
  userId: { ref: "User", type: mongoose.Schema.Types.ObjectId }, 

  caption: String,
  image: String,
  date: { type: Date, required: true},
  calories: Number,
  protein: Number,
  carbs: Number,
  fats: Number,
},
{timestamps: true}
);


const Meal = mongoose.model("Meal", mealSchema);

 module.exports =  Meal ;