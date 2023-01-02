const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route for teams in the database
router.get('/', (req, res) => {
  // GET route code here
    const sqlQuery = `SELECT * FROM teams ORDER BY "owner_name" ASC`;
    
    pool.query(sqlQuery)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('Error in GET teams', err);
            res.sendStatus(500)
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;