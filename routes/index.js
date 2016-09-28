var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController');
/* GET home page. */

router.post('/login', loginController.login);
router.get('/logout', loginController.logout);

router.get('/admin', function (req, res, next) {
  res.render('index');
});

module.exports = router;
