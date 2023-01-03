const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route for teams in the database
router.get('/', (req, res) => {
  // GET route code here
    const teamsQuery = `SELECT * FROM teams ORDER BY "owner_name" ASC`;
    
    pool
    .query(teamsQuery)
    .then(result => {res.send(result.rows)})
    .catch(err => {
        console.log('Error in GET teams', err);
        res.sendStatus(500)
    })
});

// POST team route
// router.post('/', (req, res) => {
//     const queryText = `INSERT INTO "teams" (owner_name, roster_size, profile_image)
//     VALUES ($1, $2, $3) RETURNING id`;
//     pool
//     .query(queryText, [owner_name, roster_size, profile_image])
//     .then(() => res.sendStatus(201))
//     .catch((err) => {
//         console.log('Error with POSTing team: ', err);
//         res.sendStatus(500);
//     });
//     });

// PUT route 



// DELETE route

module.exports = router;