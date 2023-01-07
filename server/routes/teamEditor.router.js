const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// teamEditor router is for CRUDing the players within a specific team

// team player GET
router.get('/:id', (req, res) => {
    // GET route code here
    const query = `SELECT * FROM "drafted_players" WHERE "team_id" = $1;`;
    console.log('get players router: ', req.params.id);
    pool
    .query(query, [req.params.id])
    .then(result => {res.send(result.rows)})
    .catch(err => {
        console.log('Error in GET team players', err);
        res.sendStatus(500)
    })
});

// Team player DELETE
router.delete('/:id', (req, res) => {
    const query = `DELETE FROM "drafted_players" WHERE "id" = $1`;
    console.log('delete player router: ', req.params.id);
    pool
    .query(query, [req.params.id])
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log('Error deleting player from team: ', err);
        res.sendStatus(500);
    })
})


module.exports = router;