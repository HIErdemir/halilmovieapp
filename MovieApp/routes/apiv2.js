const express   = require('express')
const router    = express.Router()
const Movies    = require('../models/movies')
const Users     = require('../models/users')
const _movies   = new Movies()
const _users    = new Users()


//
// Get all movies
//
router.get('/movies', function(req, res) {
    _movies.readAll( (err, result) => {
        
        if (err) {
            res.status(500).json(err.toString())
        } else {
            res.status(200).json(result)
        }
    })
});

//
// Get movie by id
//
router.get('/movies/:id', function(req, res) {

    const id = req.query.id || '';

    _movies.read( id, (err, result) => {
        if(err) {
            res.status(500).json(err.toString())
        } else {
            res.status(200).json(result)
        }
    })
});


//
// Post new movie
//
router.post('/movies', function(req, res) {

    const movie = req.body || {}

    _movies.create( movie, (err, result) => {
        if(err) {
            res.status(500).json(err.toString())
        } else {
            res.status(200).json(result)
        }
    })
});


//
// Get user by id
//
router.get('/users/:id', function(req, res) {

    const id = req.query.id || '';

    _users.read( id, (err, result) => {
        if(err) {
            res.status(500).json(err.toString())
        } else {
            res.status(200).json(result)
        }
    })
});

//
// Register new user
//
router.post('/register', function(req, res) {
    const user = req.body || {}

    _users.create( user, (err, result) => {
        if(err) {
            res.status(500).json(err.toString())
        } else {
            res.status(200).json(result)
        }
    })
});


// Fall back, display some info
router.all('*', function (req, res) {
    res.status(200);
    res.json({
        "description": "Movie API version 2"
    });
});

module.exports = router;