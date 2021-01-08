const express = require('express')
const joi = require('joi')
const bcrypt = require('bcrypt')

const { User } = require('../models/users')
const validate = require('../middleWare/validate')

const router = express.Router()

router.post('/', validate(validateAuth), async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).json({ message: 'Invalid email or password' })

    const validUser = await bcrypt.compare(req.body.password, user.password)
    if (!validUser) return res.status(400).json({ message: 'Invalid email or password' })

    const token = user.generateAuthToken()
    res.send(token)
})

function validateAuth(req) {
    const schema = {
        email: joi.string().min(5).max(255).required().email(),
        password: joi.string().min(5).max(1024).required()
    }
    return joi.validate(req, schema)
}

module.exports = router;