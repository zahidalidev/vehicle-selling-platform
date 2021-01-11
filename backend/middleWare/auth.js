const config = require('config')
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    console.log('1')
    const token = req.header('x-auth-token')
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided' })

    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
        req.user = decoded;
        next()
    } catch (error) {
        res.status(400).json({ message: "Invalid token" })
    }
}