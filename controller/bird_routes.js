//IMPORT----------------------
const express = require('express')
const router = express.Router()
const Bird = require('../models/bird')


//DELETE route to delete a bird
router.delete('/:id', (req, res) => {
    const birdId = req.params.id

    Bird.findByIdAndRemove(birdId)
        .then(bird => {
            res.redirect('/birds')
        })
        .catch(err => {
            res.json(err)
        })
})

//GET route for update form
router.get('/:id/edit', (req, res) => {
    const birdId = req.params.id

    Bird.findById(birdId)
        .then(bird => {
            res.render('birds/edit', { bird })
        })
        .catch(err => {
            res.json(err)
        })
})

//PUT route to update birds
router.put('/:id', (req, res) => {
    const birdId = req.params.id

    Bird.findByIdAndUpdate(birdId, req.body, { new: true })
        .then(bird => {
            res.redirect(`/birds/${bird._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

//GET route for create form
router.get('/new', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    res.render('birds/new', { username, loggedIn })
})

//POST route for creating 
router.post('/', (req, res) => {
    req.body.owner = req.session.userId

    console.log(req.body)
    Bird.create(req.body)
        .then(bird => {
            console.log(bird)
            res.redirect('/birds')
        })
        .catch(err => {
            res.json(err)
        })
})

//GET route for index of all birds
router.get('/', (req, res) => {

    Bird.find({})
        .then(birds => {
            res.render('birds/index', { birds })
        })
        .catch(err => {
            res.json(err)
        })
})

//GET route for index of user's birds
router.get('/mine', (req, res) => {
    Bird.find({ owner: req.session.userId })
        .then(birds => {
            res.render('birds/index', { birds })
        })
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
})

//GET route for show a bird
router.get('/:id', (req, res) => {
    const birdId = req.params.id

    Bird.findById(birdId)
        //.populate('comments.author')
        .then(bird => {
            const userId = req.session.userId
            const username = req.session.username
            res.render('birds/show', { bird, userId, username })
        })
        .catch(err => {
            res.json(err)
        })
})

//EXPORT------------------------------------
module.exports = router