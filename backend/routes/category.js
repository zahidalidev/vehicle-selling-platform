const express = require('express')
const _ = require('lodash')

const Category = require('../models/category')

const router = new express.Router()

router.post('/', async (req, res) => {
    try {
        let category = new Category(_.pick(req.body, ['title']))
        await category.save()

        res.send(category)
    } catch (error) {
        res.status(400).send('category already exist: ' + error)
    }
})

router.put('/:id', async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, {
        title: req.body.title
    }, { new: true })

    if (!category) return res.status(404).send('The Category with the given ID not found')

    res.send(category)
})

router.delete('/:id', async (req, res) => {
    const category = await Category.findByIdAndRemove(req.params.id);

    if (!category) return res.status(404).send('The Category with the given ID not found')

    res.send(category)
})

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.send(categories)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;