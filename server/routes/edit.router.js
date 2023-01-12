const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
    } = require('../modules/authentication-middleware');


    // PUT route for team edit
    router.put('/', rejectUnauthenticated, (req, res) => {

    });

    module.exports = router;