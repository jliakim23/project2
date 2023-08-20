// const express = require("express");
// const router = express.Router();
// const Nutrition = require("../models/nutrition");

// //Index
// router.get("/", async (req, res) => {
//   const allNutrition = await Nutrition.find({});
//   res.render("nutrition/index.ejs"), { nutrition: allNutrition};
// });

// //New
// router.get("/new", (req, res) => {
//   res.render("nutrition/new.ejs");
// });

// //Delete
// router.delete("/:id", async (req, res) => {
//   const id = req.params.id;
//   const deleted = await Nutrition.deleteOne({ _id: id });
//   res.send("/meal");
// });

// //Update
// router.put("/:id", async (req, res) => {
//   const id = req.params.id;
//   await Nutrition.findByIdAndUpdate(id, req.body, { new: true });
//   res.redirect(`/meal/${id}`);
// });

// //Create
// router.post("/", async (req, res) => {
//   const createdNutrition = await Nutrition.create(req.body);
//   res.send(createdNutrition);
// });

// //Show
// router.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   const nutrition = await Nutrition.findById(id);
//   res.render("nutrition/show.ejs", { nutrition });
// });
// //Update
// router.put("/:id", async (req, res) => {
//   const id = req.params.id;
//   await Nutrition.findByIdAndUpdate(id, req.body, { new: true });
//   res.redirect(`/meal/${id}`);
// });
// module.exports = router;