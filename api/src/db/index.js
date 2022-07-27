const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/vuejwt", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("connect to mongoDB")
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB