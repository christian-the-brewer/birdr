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

//SEED
//localhost:3000/fruits/seed
router.get('/seed', (req, res) => {
    // starting data
    const startPlaces = [
        {
            name: 'Cambridge Common',
            description: 'The big park in Harvard Square',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.rnmBMsA4nGHPQwFZaUPcvgEsCY%26pid%3DApi&f=1',
            address: {
                number: '5',
                streetName: 'Garden',
                streetType: 'Street',
                city: 'Cambridge',
                state: 'Ma',
                zip: '02138'
            },
            birds: []

        },
        {
            name: 'Harvard Square',
            description: 'The square that is becoming very corporate',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5WRErBfXT4i2SaQjszrBkwHaEt%26pid%3DApi&f=1',
            address: {
                number: '1',
                streetName: 'Brattle',
                streetType: 'Street',
                city: 'Cambridge',
                state: 'Ma',
                zip: '02138'
            },
            birds: []

        },
        {
            name: 'Micro Center',
            description: 'The computer store on the river. A surprising amount of birds here',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ajE1ibkvVNwHu2dcxXdQDQHaD-%26pid%3DApi&f=1',
            address: {
                number: '730',
                streetName: 'Memorial',
                streetType: 'Drive',
                city: 'Cambridge',
                state: 'Ma',
                zip: '02138'
            },
            birds: []

        },
        {
            name: 'Middlesex Fells',
            description: 'Densley wooded area home to a lot of wildlife. Bring bug spray',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2_wjcyuYYNxH9TLFqthcnwHaFj%26pid%3DApi&f=1',
            address: {
                number: '464',
                streetName: 'S Border',
                streetType: 'Road',
                city: 'Winchester',
                state: 'Ma',
                zip: '01890'
            },
            birds: []

        },
        {
            name: 'Fruitlands Museum',
            description: 'A museum based on the former site of the Alcott/s failed utopia, Fruitlands.',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.sS23lxxq77tvT45ntUg7KwHaDm%26pid%3DApi&f=1',
            address: {
                number: '102',
                streetName: 'Prospect',
                streetType: 'Rd',
                city: 'Harvard',
                state: 'Ma',
                zip: '01451'
            },
            birds: []

        },
        {
            name: 'MIT',
            description: 'Another university with a sprawling campus buying up all the real estate',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.urLJnqbc2BwJDacMvo5LzwHaDt%26pid%3DApi&f=1',
            address: {
                number: '77',
                streetName: 'massachusetts',
                streetType: 'ave',
                city: 'Cambridge',
                state: 'Ma',
                zip: '02139'
            },
            birds: []

        },
        {
            name: 'The Museum of Fine Arts',
            description: 'The MFA!',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1kb_1_FmQKY7RhXQ6eh9mAHaEi%26pid%3DApi&f=1',
            address: {
                number: '465',
                streetName: 'Huntington',
                streetType: 'Ave',
                city: 'Boston',
                state: 'Ma',
                zip: '02115'
            },
            birds: []

        },
        {
            name: 'The Isabella Stewart Gardner',
            description: 'A really nice small museum with great architecture and pieces',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Uzh-s3vFDAP4yKx886FtJQHaFj%26pid%3DApi&f=1',
            address: {
                number: '25',
                streetName: 'Evans',
                streetType: 'Way',
                city: 'Boston',
                state: 'Ma',
                zip: '02115'
            },
            birds: []

        },
        {
            name: 'New England Aquarium',
            description: 'The aquarium.',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.rQ6uB4xTeCnptz8t23cGgAHaE8%26pid%3DApi&f=1',
            address: {
                number: '1',
                streetName: 'Central',
                streetType: 'Wharf',
                city: 'Boston',
                state: 'Ma',
                zip: '02110'
            },
            birds: []

        },
        {
            name: 'Stone Zoo',
            description: 'The computer store on the river. A surprising amount of birds here',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.KAQXjSAqBBBXq5fBTL8gNQHaEY%26pid%3DApi&f=1',
            address: {
                number: '149',
                streetName: 'Pond',
                streetType: 'street',
                city: 'Stoneham',
                state: 'Ma',
                zip: '02180'
            },
            birds: []

        },
    ]

    // delete if we have fruits
    Bird.deleteMany({})
        // insert data
        .then(() => {
            Bird.create(startBirds)
                // return this data as json to view
                .then(data => {
                    res.json(data)
                })
                // .catch(err => console.error(err))
                .catch(console.error)
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