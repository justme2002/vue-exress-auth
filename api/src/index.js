require("dotenv").config()
const express = require("express")
const connectDB = require("./db")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(express.raw())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

connectDB()

const { AuthRoute } = require("./controller/auth.controller")
app.use("/api", AuthRoute)

app.listen(4000, () => console.log(`listen at port ${4000}`))