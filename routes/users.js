var express = require('express');
var router = express.Router();

const usersController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', usersController.create);
router.post('/signup', usersController.doCreate);

module.exports = router;
