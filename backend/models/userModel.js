const mongoose = require("mongoose");

const userModel = new mongoose.Schema (
  {
    firstname: { type: String },
    lastname: { type: String },
    img : { type: String},
    email : { type: String},
    password : { type: String},
    gender: { type: String, enum:["Male", "Female", "Other"] },
    country: { type: String },
  },
  {timestamps : true}
);
module.exports = mongoose.model("User", userModel);
