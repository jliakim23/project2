const mongoose = require("../database/connection");
// const Nutrition = require("./nutrition");
// const { nutritionSchema } = require("./nutrition");
// const { userSchema } = require('./user');
const { Schema } = mongoose;


const mealSchema = new mongoose.Schema({
  userId: { ref: "User", type: mongoose.Schema.Types.ObjectId }, 
  nutrition: [{ ref: "Nutrition", type: mongoose.Schema.Types.ObjectId}],
  caption: String,
  image: String,
  date: { type: Date, required: true},
},
{timestamps: true}
);


const Meal = mongoose.model("Meal", mealSchema);

 module.exports =  Meal ;