const express = require("express");
const router = express.Router();
const Meal = require("../models/meal");
const Nutrition = require("../models/nutrition");

//Index
router.get("/", async (req, res) => {
    let meals = await Meal.find();
    res.render("meal/index.ejs", { meals });
  });

//New
router.get("/new", (req,res) => {
    res.render("meal/new.ejs");
  });

//Delete
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await Meal.findByIdAndRemove(id);
    res.redirect("/meal");
  });
  
//Update
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    await Meal.findByIdAndUpdate(id, req.body, { new: true });
    res.redirect("/meal");
  });

//Create
router.post("/new", async (req, res) => {
    await Meal.create(req.body);
    let nutrition = await Nutrition.create(req.body);
     res.redirect("/meal");
  });


//Edit

router.get("/:id/edit", async (req, res) => {
    const id = req.params.id;
    const meal = await Meal.findById(id);
    const nutrition = await Nutrition.findById(req.params.id)
        .populate("meals")
        .populate("userId");

    res.render("meal/edit.ejs", {meal, nutrition });
  });


//Show
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const meal = await Meal.findById(id).populate("nutrition");
    res.render("meal/show.ejs", { meal, nutrition: meal.nutrition});
  });

  router.post("/nutrition", async (req,res) => {
     console.log(req.body)
    let nutrition = await Nutrition.create(req.body);
    
    res.json(nutrition);
    });


module.exports = router;