const mongoose = require('../database/connection');
const { mealSchema } = require('./meal');

const { Schema } = mongoose; 


const nutritionSchema = new Schema({
    meals: [mealSchema],
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
});

const Nutrition= mongoose.model('Nutrition', nutritionSchema);
module.exports = Nutrition;