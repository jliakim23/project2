const express = require("express");
const router = express.Router();
const Meal = require("../models/meal");
const Nutrition = require("../models/nutrition");

//Index
router.get("/", async (req, res) => {
    let meals = await Meal.find()
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
    res.redirect(`/meal/${id}`);
  });

//Create
router.post("/", async (req, res) => {
    const meal = await Meal.create(req.body);
     res.redirect("/meal");
  });
// router.post("/", async (req, res) => {
//   try {  
//       const meal = await Meal.create(req.body);
//       const nutrition = await Nutrition.create(req.body);
//       meal.nutrition.push(nutrition._id);
//       await meal.save();
//       res.redirect("/meal");
//   } catch (error) {
//       console.error(error);
//       res.status(500).send("Error creating meal and nutrition");
//   }
// });

//Edit

router.get("/:id/edit", async (req, res) => {
    const id = req.params.id;
    const meal = await Meal.findById(id);

    res.render("meal/edit.ejs", {meal });
  });


//Show
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const meal = await Meal.findById(id);
    res.render("meal/show.ejs", { meal});
  });

  // router.post("/nutrition", async (req,res) => {
  //    console.log(req.body)
  //   let nutrition = await Nutrition.create(req.body);
    
  //   res.json(nutrition);
  //   });

    // router.get("/nutrition/:id", async (req, res) => {
    //   const nutrition = await Nutrition.findById(req.params.id)
    //     .populate("meal")
    //     .populate("userId")
    //     .populate("nutrition");
    
    //   // res.json(nutrition);
    //   res.render("nutrition/show.ejs", { nutrition });
    // });

    // router.get("/nutrition", async (req, res) => {
    //   const nutritions = await Nutrition.find({ userId: req.session.userId })
    //     .populate("meal")
    //     .populate("userId")
    //     .populate("nutrition");
    
    //   console.log(nutritions);
    //   res.render("nutrition/index.ejs", { nutritions });
    // });

module.exports = router;