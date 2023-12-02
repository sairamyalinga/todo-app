var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const taskSchema = new mongoose.Schema({
  tasks: { type: String, required: true }
  
});

const TaskObj = mongoose.model('TaskObj', taskSchema);

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  TaskObj.find({}) // `find` returns a query, no need for a callback
    .then(tasks => {
      res.render('index', { tasks: tasks });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.post('/addTask', function(req, res) {
  const taskName = req.body.taskname;

  if (!taskName) {
    return res.status(400).json({ error: 'Task name is required' });
  }

  const newTask = new TaskObj({ tasks: taskName });

  newTask.save()
    .then(() => {
      // Redirect to the home page after adding a task
      res.redirect('/');
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    });
});


app.get('/hello', function (req, res) {
  res.json("Hello");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
