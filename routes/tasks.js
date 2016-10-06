var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://jrogodel:jRgSophia4409@ds053136.mlab.com:53136/task-list', ['tasks']);
  
router.get('/tasks', (req, res, next) => { 
  db.tasks.find((err, tasks) => {
    if(err) {
      res.send(err);
    }
    res.json(tasks);
  })
});

module.exports = router;