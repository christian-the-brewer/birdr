//IMPORT---------------------------------
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

// create router
const router = express.Router()

//SIGNUP------------------------------------

//GET to show form for sign up
router.get('/signup', (req, res) => {
    res.render('users/signup')
})

//POST to add to db
router.post('/signup', async (req, res) => {
    console.log('this is our initial request body', req.body)
    //encrypt password
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )

    // create user
    console.log('this is request body after hashing', req.body)
    User.create(req.body)
        // if created successfully, we'll redirect to the login page
        .then(user => {
            console.log('this is the new user', user)
            res.redirect('/users/login')
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//LOGIN---------------------------------

//GET to show form
router.get('/login', (req, res) => {
    res.render('users/login')
})

//POST to login and create session
router.post('/login', async (req, res) => {
    const { username, password } = req.body
    console.log('this is the session', req.session)
    User.findOne({ username })
        .then(async (user) => {
            if (user) {
                const result = await bcrypt.compare(password, user.password)

                if (result) {
                    req.session.username = username
                    req.session.loggedIn = true
                    req.session.userId = user._id
                    console.log('this is the session after login', req.session)
                    //QUESTION where should I send it?
                    res.redirect('/')
                } else {
                    // res.json({ error: 'username or password incorrect' })
                    res.render('./users/loginFail')
                }
            } else {
                res.json({ error: 'user does not exist' })
            }
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//LOGOUT-------------------------------------

//GET to end session
router.get('/logout', (req, res) => {
    req.session.destroy(ret => {
        console.log('this is returned from req.session.destroy', ret)
        console.log('session has been destroyed')
        console.log(req.session)
        //QUESTION where should redirect
        res.redirect('/')
    })
})

//EXPORT--------------------------
module.exports = router