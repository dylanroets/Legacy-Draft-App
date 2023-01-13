const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
    } = require('../modules/authentication-middleware');


    // PUT route for team edit
    router.put('/', rejectUnauthenticated, (req, res) => {
        console.log(' team edit req.body: ', req.body);
        console.log(' team id: ', req.body.id);
        const query = `UPDATE "teams" SET "owner_name" = $1, "roster_size" = $2, "profile_image" = $3, "team_salary" = $4 WHERE "id" = $5`
        pool
        .query(query, [req.body.owner_name, req.body.roster_size, req.body.profile_image, req.body.team_salary, req.body.id])
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log('Error updating team in router: ', err);
            res.sendStatus(500);
        })
    });

    module.exports = router;