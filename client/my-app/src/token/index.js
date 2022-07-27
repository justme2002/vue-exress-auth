const generateAccesstoken = (accessToken) => {
  localStorage.setItem('accessToken', accessToken)
}

const generateRefreshToken = (refreshToken) => {
  localStorage.setItem('refreshToken', refreshToken)
}

const getToken = (token) => {
  return localStorage.getItem(token)
}

export {
  generateAccesstoken,
  generateRefreshToken,
  getToken
}