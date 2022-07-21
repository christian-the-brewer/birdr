//IMPORT----------------------
const express = require('express')
const router = express.Router()
const Place = require('../models/place')


//DELETE route to delete a place
router.delete('/:id', (req, res) => {
    const birdId = req.params.id

    Place.findByIdAndRemove(birdId)
        .then(place => {
            res.redirect('/places')
        })
        .catch(err => {
            res.json(err)
        })
})

//GET route for update form
router.get('/:id/edit', (req, res) => {
    const birdId = req.params.id

    Place.findById(birdId)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(err => {
            res.json(err)
        })
})

//PUT route to update places
router.put('/:id', (req, res) => {
    const birdId = req.params.id

    Place.findByIdAndUpdate(birdId, req.body, { new: true })
        .then(place => {
            res.redirect(`/places/${place._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

//GET route for create form
router.get('/new', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    res.render('places/new', { username, loggedIn })
})

//POST route for creating 
router.post('/', (req, res) => {
    //req.body.owner = req.session.userId

    console.log(req.body)
    Place.create(req.body)
        .then(place => {
            console.log(place)
            res.redirect('/places')
        })
        .catch(err => {
            res.json(err)
        })
})

//GET route for index of all places
router.get('/', (req, res) => {

    Place.find({})
        .then(places => {
            res.render('places/index', { places })
        })
        .catch(err => {
            res.json(err)
        })
})

//GET route for index of user's places
router.get('/mine', (req, res) => {
    Place.find({ owner: req.session.userId })
        .then(places => {
            res.render('places/index', { places })
        })
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
})

//GET route for show a place
router.get('/:id', (req, res) => {
    const placeId = req.params.id

    Place.findById(placeId)
        .then(place => {
            const userId = req.session.userId
            const username = req.session.username
            res.render('places/show', { place, userId, username, })
        })
        .catch(err => {
            res.json(err)
        })
})

//EXPORT------------------------------------
module.exports = router