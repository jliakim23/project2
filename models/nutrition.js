const mongoose = require('../database/connection');
const { mealSchema } = require('./meal');

const { Schema } = mongoose; 


const nutritionSchema = new Schema({
    userId: { ref: "User", type: mongoose.Schema.Types.ObjectId },
    meals: [{ ref: "Meal", type: mongoose.Schema.Types.ObjectId }],
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
});

const Nutrition= mongoose.model('Nutrition', nutritionSchema);
module.exports = Nutrition;