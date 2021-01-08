const express = require('express')
const _ = require('lodash')

const Ad = require('../models/ad')

const router = new express.Router()

router.post('/', async (req, res) => {
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
            'images',
            'categoryTitle',
            'userID'
        ]))
        await ad.save()

        res.send(ad)
    } catch (error) {
        res.send(error)
    }
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
        const ads = await Ad.find();
        res.send(ads)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;