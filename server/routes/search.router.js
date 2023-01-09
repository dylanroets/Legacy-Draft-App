const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

// Search GET for players
router.get('/:string', (req, res) => {
    console.log('search players router: ', req.params.string);
    const searchString = req.params.string;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${process.env.NFL_API_KEY}`,
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
        }
    };

    const query = axios.get(  `https://api-american-football.p.rapidapi.com/players?search=${searchString}`, options  )
    

    pool
    .query(query, searchString)
    .then(result => {res.send(result.rows)})
    .catch(err => {
        console.log('Error in GET team players', err);
        res.sendStatus(500)
    })
});


module.exports = router;