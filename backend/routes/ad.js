const express = require('express')
const _ = require('lodash')
const multer = require('multer');
const fs = require('fs-extra')

const auth = require('../middleWare/auth')
const Ad = require('../models/ad')

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

router.post('/', auth, async (req, res) => {
    try {
        let ad = new Ad(_.pick(req.body, [
            'vehicleName',
            'registrationYear',
            'city',
            'mileage',
            'exteriorColour',
            'vehicleModel',
            'vehicleDescription',
            'sellingPrice',
            'vehicleStatus',
            'adStatus',
            'engine',
            'date',
            'categoryTitle',
            'userID'
        ]))
        await ad.save()

        res.send(ad)
    } catch (error) {
        res.send(error)
    }
})

router.put('/images/:id', upload.single('file'), async (req, res) => {
    await Ad.findByIdAndUpdate(req.params.id,
        { "$addToSet": { "images": req.file.path.replace('assets\\', '') } },
        { "new": true, "upsert": true },
        function (err, managerparent) {
            if (err) return res.status(404).send('The ad with the given ID not found');
            res.send(managerparent);
        }
    );
})

router.put('/:id', async (req, res) => {
    const ad = await Ad.findByIdAndUpdate(req.params.id, {
        vehicleName: req.body.vehicleName,
        registrationYear: req.body.registrationYear,
        city: req.body.city,
        mileage: req.body.mileage,
        exteriorColour: req.body.exteriorColour,
        vehicleModel: req.body.vehicleModel,
        vehicleDescription: req.body.vehicleDescription,
        sellingPrice: req.body.sellingPrice,
        vehicleStatus: req.body.vehicleStatus,
        adStatus: req.body.adStatus,
        engine: req.body.engine,
        date: req.body.date,
        images: req.body.images,
        categoryTitle: req.body.categoryTitle,
        userID: req.body.userID,
    }, { new: true })

    if (!ad) return res.status(404).send('The ad with the given ID not found')

    res.send(ad)
})


router.delete('/:id', async (req, res) => {
    const ad = await Ad.findByIdAndRemove(req.params.id);

    if (!ad) return res.status(404).send('The ad with the given ID not found')

    res.send(ad)
})

router.get('/:id', async (req, res) => {
    try {
        const ad = await Ad.findById(req.params.id);
        if (!ad) return res.status(404).send('The ad with the given ID not found')
        res.send(ad)
    } catch (error) {
        res.send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let ads = await Ad.find().select(['vehicleName', 'sellingPrice', 'city', 'vehicleModel', 'images']);
        for (let i = 0; i <= ads.length - 1; i++) {
            ads[i].images = ads[i].images[0]
        }

        res.send(ads)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;