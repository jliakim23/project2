const express = require("express");
const router = express.Router();
const Meal = require("../models/meal");
const Nutrition = require("../models/nutrition");

//Index
router.get("/meal", async (req, res) => {
    let meals = await Meal.find();
    res.render("meal/index.ejs", { meals });
  });

//New
router.get("/new", (req,res) => {
    res.render("meal/new.ejs");
  });

//Create
router.post("/meal", async (req, res) => {
    await Meal.create(req.body);
    res.redirect("/meal");
  });



// router.get("/seed", async (req, res) => {
// //   await Meal.deleteMany({});
//   let seededMeals = await Meal.create([
//     {
//       name: "Bbq",
//       description: "korean bbq",
//       image:
//         "https://simplyhomecooked.com/wp-content/uploads/2021/02/Starbucks-Caramel-Frappuccino-Copycat-recipe-11.jpg",
//       date: ,

//     },
//     {
//       name: "Pizza",
//       description: "Pesto white pizza",
//       image:
//         "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190528_MochaFrapp.jpg?impolicy=1by1_wide_topcrop_630",
//       date: ,

//     },
//     {
//       name: "Stew",
//       description: "Korean stew",
//       image:
//         "https://www.forkinthekitchen.com/wp-content/uploads/2022/06/220518.homemade.caramel.latte-6630.jpg",
//       date: ,

//     },
//   ]);

//   res.send(seededMeals);
// });


module.exports = router;