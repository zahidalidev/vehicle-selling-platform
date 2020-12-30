const express = require('express')
const _ = require('lodash')
const bcrypt = require('bcrypt')

const validate = require('../middleWare/validate')
const auth = require('../middleWare/auth')
const { User, validateUser } = require('../models/users')

const router = new express.Router()

// to get the current user using x-auth-token (json web token) in a header of request, 
// using auth middle for autherization
router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password')  // find user by id and exclude password
    res.send(user)
})

router.post('/', validate(validateUser), async (req, res) => {
    let user = User.findOne({ 'email': req.body.email })
    if (!user) return res.status(400).send('user already exist')

    user = new User(_.pick(req.body, ['fullName', 'email', 'contactNumber', 'fullAddress', 'password', 'isAdmin']))

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    await user.save()

    const token = user.generateAuthToken()
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'fullName', 'email', 'isAdmin']))
})


module.exports = router;

