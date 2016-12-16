var express = require('express'); // require express library
var router = express.Router(); // set up new router using express
var pg = require('pg'); // require page library for DB

// database configuration

var config = {
  database: 'to_do',
};

var pool = new pg.Pool(config);

// get all of the tasks from the database

router.get('/:id', function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    client.query('SELECT * FROM tasks WHERE id = $1;', [req.params.id], function (err, result) {
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

router.get('/', function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    client.query('SELECT * FROM tasks ORDER BY complete;', function (err, result) {
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

// insert newly added task into database

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
        console.log('Error inserting into the DB', err);
        res.sendStatus(500);
        return;
      }

      console.log('Got rows from the DB:', result.rows);
      res.send(result.rows);
    });
  });
});

router.delete('/:id', function (req, res) {
  var id = req.params.id;

  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to the DB', err);
        res.sendStatus(500);
        return;
      }

      client.query('DELETE FROM tasks WHERE id=$1;', [id], function (err) {
        if (err) {
          console.log('Error deleting from the DB', err);
          res.sendStatus(500);
          return;
        }

        res.sendStatus(204);
      });
    } finally {
      done();
    }
  });
});

module.exports = router; // export router to make it available to server
