var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
  database: 'to_do',
};

var pool = new pg.Pool(config);

router.get('/', function (req, res) {
  console.log('req.body:', req.body);
  res.sendStatus(200);
});

router.post('/', function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    client.query('INSERT INTO tasks (task, complete) VALUES ($1, $2) returning *;',
    [req.body.task, req.body.complete],
     function (err, result) {
      done();
      if (err) {
        console.log('Error querying the DB', err);
        res.sendStatus(500);
        return;
      }

      console.log('Got rows from the DB:', result.rows);
      res.send(result.rows);
    });
  });
});

module.exports = router;
