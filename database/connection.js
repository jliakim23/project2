const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://jliakim23:wSKpKPSGBsdfX8aU@sei.fpisaib.mongodb.net/FoodLog"
);


mongoose.connection.on("connected", () => console.log("connected"));
mongoose.connection.on("error", () => console.log(" Error"));

module.exports = mongoose;