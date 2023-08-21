const express = require("express");
const app = express();
const PORT = 4000;
const expressLayouts = require("express-ejs-layouts");
const authRoutes = require("./controllers/authController");
const session = require("express-session");
const mealRoutes = require("./controllers/mealController")
const methodOverride = require("method-override");
app.set("view engine", "ejs");

// middlewares
app.use(express.static("public"));
app.use(expressLayouts);
app.use(
  // one hour login time
  session({ secret: "somestringreandomdwd", cookie: { maxAge: 3600000 } })
);
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(authRoutes);

app.get("/", (req, res) => {
  res.render("home.ejs");
});


// app.use((req, res, next) => {
//   if (!req.session.userId) {
//     res.redirect("/login");
//     return;
//   }

//   next();
// });

app.use("/meal", mealRoutes);




app.listen(PORT, () => console.log("listening to port:", PORT));