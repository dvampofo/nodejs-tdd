var express = require('express');
var router = express.Router();
var createError = require('http-errors')

const todos = [
  {id: 1, name: 'Do something', completed: false}];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(todos);
});

router.get('/:id', function (req, res, next) {
  const foundTodo = todos.find(todo => todo.id === Number(req.params.id));

  if (!foundTodo) {
    return next(createError(404, 'Not Found'))
  }
  res.json(foundTodo)
})

router.post('/', function (req, res, next) {
  const { body } = req;

  // Creating the new todos object
  const newTodo = {
    id: todos.length + 1,
    name: body.name,
    completed: false
  };

  todos.push(newTodo); // Add to todos array
  res.status(201).json(newTodo);   // respond with json object
})
module.exports = router;
