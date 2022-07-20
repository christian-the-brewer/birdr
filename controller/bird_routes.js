//IMPORT----------------------
const express = require('express')
const router = express.Router()
const Bird = require('../models/bird')
const Place = require('../models/place')


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

//SEED
//localhost:3000/fruits/seed
router.get('/seed', (req, res) => {
    // starting data
    const startBirds = [
        {
            name: 'House Sparrow',
            description: "An introduced non-migratory species. Males have gray and brown headswith white cheeks and a black bib, with grey bellies and black and brown backs. Females lack the bib and are browner all over.",
            img: "https://www.birdadvisors.com/wp-content/uploads/2022/02/House-sparrow-edited.jpg",
            seasons: ['spring', 'summer', 'fall', 'winter'],
            places: []


        },
        {
            name: 'Turkey Vulture',
            description: "With an appearance somewhat wimilar to a turkey, the Turkey Vulture has a bald red head with a brown-ish-black body and light colored bill. While flying their wings are slightly raised and form a V shape.",
            img: "https://www.birdadvisors.com/wp-content/uploads/2022/06/Turkey-Vulture-edited.jpg",
            seasons: ['spring', 'summer', 'fall'],
            places: []


        },
        {
            name: 'Black-capped Chickadee',
            description: "Distinctive large head and tiny body. Aptly named, with a black cap, beak, and throat, with white throat and cheeks. They have gray backs, wings, and tails and a light tan belly. ",
            img: "https://www.birdadvisors.com/wp-content/uploads/2021/01/Black-capped-chickadee-768x511.jpg",
            seasons: ['spring', 'summer', 'fall', 'winter'],
            places: []


        },
        {
            name: 'Carolina Wren',
            description: "With small heads relative to their very round bodies, the wren resembles and beaked ball. It has brown head, back and wings, with a lighter tan belly. Noticeable white eyebrows.",
            img: "https://www.birdadvisors.com/wp-content/uploads/2021/01/Carolina-Wren-1024x683.jpg",
            seasons: ['spring', 'summer', 'fall', 'winter'],
            places: []


        },
        {
            name: 'Snowy Owl',
            description: "Distinctive flecks of brown and black across a white plumage with yellows make these a very streiking bird. Not common in Massachusetts as it is the southern limits of their range.",
            img: "https://www.birdadvisors.com/wp-content/uploads/2020/12/Snowy-owl-768x548.jpg",
            seasons: ['winter'],
            places: []


        },
        {
            name: 'Red-tailed Hawk',
            description: "With a short and wide red tail and brown backs and light bellies, they can often be seen circling on high, searching for prey",
            img: "https://www.birdadvisors.com/wp-content/uploads/2020/12/Depositphotos_red-tailed-hawk-1-768x560.jpg",
            seasons: ['spring', 'summer', 'fall', 'winter'],
            places: []


        },
        {
            name: 'Red-headed Woodpecker',
            description: "Bright red heads make this wookpecker quite distinctive. They have white bellies and black wings and back",
            img: "https://www.birdadvisors.com/wp-content/uploads/2021/02/red-headed-woodpecker-3-768x512.jpg",
            seasons: ['spring', 'summer', 'fall',],
            places: []


        },
        {
            name: 'American Robin',
            description: "black heads, backs, and wings with a reddish belly are charactreristic of this common backyard bird.",
            img: "https://www.birdadvisors.com/wp-content/uploads/2021/01/American-robin-1024x683.jpg",
            seasons: ['spring', 'summer', 'fall',],
            places: []


        },
        {
            name: 'Blue Jay',
            description: "Bright blue crests with blue wings, light bellies and black backs, these vocal songbirds are always on the search for the next meal.",
            img: "https://www.birdadvisors.com/wp-content/uploads/2022/01/Blue-Jay-2-edited.jpg",
            seasons: ['spring', 'summer', 'fall', 'winter'],
            places: []


        },
        {
            name: 'Marina the Timneh African Grey',
            description: "Bright red heads make this wookpecker quite distinctive. They have white bellies and black wings and back",
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogs-images.forbes.com%2Fgrrlscientist%2Ffiles%2F2016%2F10%2FAfrican-grey-parrot-1024x682.jpg&f=1&nofb=1",
            seasons: ['spring', 'summer', 'fall',],
            places: []


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


//GET route for tracking form
router.get('/:id/track', (req, res) => {
    const birdId = req.params.id
    Place.find({})

    Bird.findById(birdId)
        .then(bird => {
            res.render('birds/track', { bird })
        })
        .catch(err => {
            res.json(err)
        })
})

//PUT route to update bird tracking
router.put('/:id', (req, res) => {
    const birdId = req.params.id
    req.body.owner = req.session.userId

    Bird.findByIdAndUpdate(birdId, req.body, { new: true })
        .then(bird => {
            res.redirect(`/birds/${bird._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

//EXPORT------------------------------------
module.exports = router