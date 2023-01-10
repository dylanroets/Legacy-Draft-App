const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

// Search GET for players
router.get('/:string', (req, res) => {
    // console.log('search players router: ', req.params.string);
    const searchString = req.params.string;
    

    const options = {
        method: 'GET',
        url: 'https://api-american-football.p.rapidapi.com/players',
        params: {search: searchString},
        headers: {
            'X-RapidAPI-Key': `${process.env.NFL_API_KEY}`,
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            res.send(response.data)
        }).catch(function (error) {
            console.error(error);
        });
});


// Post route for new players found in the search
// Need to send relevant player info along with..
// the exact team that I'm POST in to
router.post('/', (req, res) => {
    console.log('add player router.post: ', req.body);
    const player = req.body

})


module.exports = router;