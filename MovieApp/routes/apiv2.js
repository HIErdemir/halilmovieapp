const express   = require('express')
const router    = express.Router()
const Movies    = require('../models/movies')
const _movies   = new Movies();


//
// URL zonder
//
router.get('/movies', function(req, res) {
    _movies.readAll( (err, result) => {
        console.table(result)

        if (err) {
            res.status(500).json(err.toString())
        } else {
            res.status(200).json(result)
        }
    })
});

//
// URL parameters
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
// URL parameters
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

// Fall back, display some info
router.all('*', function (req, res) {
    res.status(200);
    res.json({
        "description": "Movie API version 2"
    });
});

module.exports = router;