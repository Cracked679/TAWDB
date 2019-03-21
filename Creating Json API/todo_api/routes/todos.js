var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/todos');

//Get and Create new todos
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo);

    
//show,update and delete data
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;
