const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
    } = require('../modules/authentication-middleware');


    // PUT route for team edit
    router.put('/', rejectUnauthenticated, (req, res) => {
        console.log(' team edit req.body: ', req.body);

    });

    module.exports = router;