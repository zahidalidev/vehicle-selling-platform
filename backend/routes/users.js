const { User } = require('../models/users')
const express = require('express')
const _ = require('lodash')
const bcrypt = require('bcrypt')

const router = new express.Router()

router.post('/', async (req, res) => {
    let user = User.findOne({ 'email': req.body.email })
    if (!user) return res.status(400).send('user already exist')

    user = new User(_.pick(req.body, ['fullname', 'email', 'contactNumber', 'fullAddress', 'password']))

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    await user.save()

    res.send(_.pick(user, ['_id', 'fullname', 'email']))
})

router.get('/me', async (req, res) => {
    res.send('hi')
})

module.exports = router;

