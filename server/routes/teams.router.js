const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
    } = require('../modules/authentication-middleware');

// GET route for teams in the database
router.get('/', rejectUnauthenticated, (req, res) => {
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

router.get('/:id', rejectUnauthenticated, (req, res) => {
    // GET route code here
    const query = `SELECT * FROM "teams" WHERE "id" = $1;`;
    console.log('get specific team router id: ', req.params.id);
    pool
    .query(query, [req.params.id])
    .then(result => {res.send(result.rows)})
    .catch(err => {
        console.log('Error in GET team with id', err);
        res.sendStatus(500)
    })
});

// POST team route
router.post('/', rejectUnauthenticated, (req, res) => {
    const query = `INSERT INTO "teams" (owner_name, roster_size, profile_image, team_salary)
    VALUES ($1, $2, $3, $4)`;
    console.log('req.body: ', req.body);
    pool
    .query(query, [req.body.ownerName, req.body.rosterSize, req.body.profileImage, req.body.teamSalary])
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.log('Error with POSTing team: ', err);
        res.sendStatus(500);
    });
});

// PUT route 



// DELETE route
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const query = `DELETE FROM "teams" WHERE "id" = $1`;
    // console.log('delete router: ', req.params.id);
    pool
    .query(query, [req.params.id])
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log('Error deleting Team in router: ', err);
        res.sendStatus(500);
    })
})

module.exports = router;