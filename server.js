//IMPORT-------------------------------------------------
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const birdRoutes = require('./controller/bird_routes')
const userRoutes = require('./controller/user_routes')
const placeRoutes = require('./controller/place_routes')

//CREATE EXPRESS-------------------------------------------
const app = require('liquid-express-views')(express())

//MIDDLEWARE-----------------------------------------------
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
// parses urlencoded request bodies
app.use(express.urlencoded({ extended: false }))
// to serve files from public statically
app.use(express.static('public'))
// bring in our session middleware
const session = require('express-session')
const MongoStore = require('connect-mongo')

//sessionsware
app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI
        }),
        saveUninitialized: true,
        resave: false
    })
)


//ROUTES--------------------------
app.use('/birds', birdRoutes)
app.use('/users', userRoutes)
app.use('/places', placeRoutes)

//LOCALHOST-------------------------------------
app.get('/', (req, res) => {
    // res.send('your server is running, better go catch it')
    res.render('homepage')
})

//SHHHHHHHSSSHH LISTEN
const PORT = process.env.PORT
app.listen(process.env.PORT || 3000, () => {
    console.log(`be quiet, app is listening on port: ${PORT}`)
})