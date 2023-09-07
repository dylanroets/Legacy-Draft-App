const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const teamsRouter = require('./routes/teams.router')
const teamEditorRouter = require('./routes/teamEditor.router')
const searchRouter = require('./routes/search.router')
const editRouter = require('./routes/edit.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/teamEditor', teamEditorRouter)
app.use('/api/search', searchRouter)
app.use('/api/edit', editRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native


//ElephantSQL Node.js Database Connection
var conString = "postgres://hfabukiw:o_lpcrrkBGMklyxspr75WsMVXhHOYFHt@hansken.db.elephantsql.com/hfabukiw" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
