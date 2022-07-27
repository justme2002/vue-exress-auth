const mongoose = require("mongoose")

const { Schema } = mongoose

const User = mongoose.model("user", new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: false
  },
  refreshToken: {
    type: String,
    required: false,
    unique: false
  }
}))


module.exports = User