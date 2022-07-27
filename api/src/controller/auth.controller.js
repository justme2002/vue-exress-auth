const express = require("express")
const AuthRoute = express.Router()
const argon2 = require("argon2")
const User = require("../model/User")
const { generateAccessToken } = require("../token")
const authMiddleware = require("../middleware/authMiddleware")

AuthRoute.post(`/register`, async (req, res) => {
  const { username, password } = req.body

      const hashPassword = await argon2.hash(password)

      try {
        const user = await User.create({
          username,
          password: hashPassword
        })

        const accessToken = generateAccessToken({
          _id: user._id
        }, process.env.ACCESS_TOKEN)

        res.json({
          success: true,
          message: "sign up successfully",
          accessToken
        })

      } catch (error) {
        console.log(error)
        res.status(404).json({
          success: false,
          message: error
        })
      }
    })

AuthRoute.post("/sign_in", async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({
      username
    })
    
    if (!user) return res.sendStatus(401)
    
    const decodedPassword = await argon2.verify(user.password, password)
    if (!decodedPassword) return res.sendStatus(401)

    const accessToken = generateAccessToken({ _id: user._id }, process.env.ACCESS_TOKEN)

    return res.json({
      success: true,
      message: "welcome back user",
      accessToken
    })
  
  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false, 
      message: error
    })
  }
})

AuthRoute.get("/user", authMiddleware, async (req, res) => {

  try {
    const user = await User.findOne({ _id: req.id })
    res.json({
      success: true,
      message: "logged user",
      username: user.username
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: error
    })
  }
})

module.exports = { AuthRoute }