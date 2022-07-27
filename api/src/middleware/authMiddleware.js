const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization")
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) return res.sendStatus(401)

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN)
    req.id = decoded._id

  } catch (error) {
    console.log(error)
  }
  next()
}