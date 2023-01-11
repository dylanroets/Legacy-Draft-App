const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
const {
    rejectUnauthenticated,
    } = require('../modules/authentication-middleware');

// Search GET for players
router.get('/:string', rejectUnauthenticated, (req, res) => {
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
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('add player router.post: ', req.body);
    const player = req.body
    const query = `INSERT INTO "drafted_players" (team_id, player_id, player_name, player_position, player_group, player_age, player_weight, player_height, player_image)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

    pool
    .query(query, [player.team_id, player.player_id, player.player_name, player.player_position, player.player_group, player.player_age, player.player_weight, player.player_height, player.player_image])
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.log('Error with POSTing player: ', err);
        res.sendStatus(500);
    });
});


module.exports = router;