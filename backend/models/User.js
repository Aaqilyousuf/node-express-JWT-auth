const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  quote: {
    type: String,
  },
});
module.exports = mongoose.model("User", userSchema);
