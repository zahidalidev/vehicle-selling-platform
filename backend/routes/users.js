const express = require('express')
const _ = require('lodash')
const bcrypt = require('bcrypt')
const multer = require('multer');
const fs = require('fs-extra')

const validate = require('../middleWare/validate')
const auth = require('../middleWare/auth')
const { User, validateUser } = require('../models/users')

const router = new express.Router()

// saving file 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/images/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage })

// to get the current user using x-auth-token (json web token) in a header of request, 
// using auth middle for autherization
router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password')  // find user by id and exclude password
    res.send(user)
})

router.get('/allUsers', async (req, res) => {
    const user = await User.find().select('-password')  // find user by id and exclude password
    if (!user) return res.status(404).send('Users not found')
    res.send(user)
})

router.get('/adOwner/:id', async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')  // find user by id and exclude password
    if (!user) return res.status(404).send('The user with the given ID not found')
    res.send(user)
})

router.post('/', validate(validateUser), async (req, res) => {
    try {
        let user = User.findOne({ 'email': req.body.email })
        if (!user) return res.status(400).json({ message: "User already exist" })

        user = new User(_.pick(req.body, ['fullName', 'email', 'contactNumber', 'fullAddress', 'password', 'isAdmin']))

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)

        await user.save()

        const token = user.generateAuthToken()
        res.header('x-auth-token', token).send(_.pick(user, ['_id', 'fullName', 'email', 'isAdmin']))
    } catch (error) {
        res.status(400).json({ message: "User already exist" })
    }
})

router.put('/me/:id', auth, async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            fullName: req.body.fullName,
            email: req.body.email,
            contactNumber: req.body.contactNumber,
            fullAddress: req.body.fullAddress,
        }, { new: true }).select('-password')

        if (!user) return res.status(404).send('The user with the given ID not found')

        res.send(user)
    } catch (error) {
        res.status(400).json({ message: "User already exist" })
    }
})

router.put('/me/profileImage/:id', upload.single('file'), async (req, res) => {
    try {
        let user = await User.findById(req.params.id)
        if (user.profileImage) await fs.remove(`assets\\${user.profileImage}`)

        user = await User.findByIdAndUpdate(req.params.id, {
            profileImage: req.file.path.replace('assets\\', ''),
        }, { new: true }).select('-password')

        if (!user) return res.status(404).send('The user with the given ID not found')

        res.send(user)
    } catch (error) {
        res.status(400).json({ message: "User already exist" })
    }
})


module.exports = router;

