const { sign } = require("jsonwebtoken")

const generateAccessToken = (payload, signature) => {
  const accessToken = sign(payload, signature)
  return accessToken
}

const generateRefreshToken = (payload, signature) => {
  const refreshToken = sign(payload, signature)
  return refreshToken
}

module.exports = {
  generateAccessToken,
  generateRefreshToken
}