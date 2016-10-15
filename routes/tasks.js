const express = require('express')
const router = express.Router()
const mongojs = require('mongojs')

// connect database
const db = mongojs('mongodb://jrogodel:jRgSophia4409@ds053136.mlab.com:53136/task-list', ['tasks'])
  
// get all tasks  
router.get('/tasks', (req, res, next) => { 
  db.tasks.find((err, tasks) => {
    if(err) {
      res.send(err)
    }
    res.json(tasks)
  })
})

// get single task
router.get('/task/:id', (req, res, next) => {
  db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
    if(err) {
      res.send(err)
    }
    res.json(task)
  })
})

// save tasks
router.post('/task', (req, res, next) => {
  const task = req.body;
  if(!task.title || !(task.isDone + "")) {
    res.status(400)
    res.json({ "error": "Bad Data"})
  } else {
    db.tasks.save(task, (err, task) => {
      if(err) {
        res.send(err)
      }
      res.json(task)
    })
  }
})

// delete task
router.delete('/task/:id', (req, res, next) => {
  db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
    if(err) {
      res.send(err)
    }
    res.json(task)
  })
})

// update task
router.put('/task/:id', (req, res, next) => {
  const task = req.body
  const updateTask = {}

  if(task.isDone) {
    updateTask.isDone = task.isDone
  }
  if(task.title) {
    updateTask.title = task.title
  }
  if(!updateTask) {
    res.status(400)
    res.json({"error": "Bad Data"})
  } else {
    db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updateTask, {}, (err, task) => {
      if(err) {
        res.send(err)
      }
      res.json(task)
    })
  }
})


module.exports = router;