const mongoose = require('../database/connection');
const { mealSchema } = require('./meal');
const { userSchema } = require('./user');
const { Schema } = mongoose; 


const nutritionSchema = new mongoose.Schema({
    meals: [{ ref: "Meal", type: mongoose.Schema.Types.ObjectId }],
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
});

const Nutrition= mongoose.model('Nutrition', nutritionSchema);
module.exports = Nutrition;