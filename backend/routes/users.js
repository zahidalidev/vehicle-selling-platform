const express = require('express')
const _ = require('lodash')
const bcrypt = require('bcrypt')
const validate = require('../middleWare/validate')

const { User, validateUser } = require('../models/users')

const router = new express.Router()


router.get('/me', async (req, res) => {
    res.send('hi')
})

router.post('/', validate(validateUser), async (req, res) => {
    let user = User.findOne({ 'email': req.body.email })
    if (!user) return res.status(400).send('user already exist')

    user = new User(_.pick(req.body, ['fullName', 'email', 'contactNumber', 'fullAddress', 'password']))

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    await user.save()

    res.send(_.pick(user, ['_id', 'fullName', 'email']))
})


module.exports = router;

