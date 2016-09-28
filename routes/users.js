var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController');
var userController = require('../controller/userController');


/* GET users listing. */

router.get('/showuser', loginController.login, loginController.adminRequire, userController.findAllUser);
router.get('/deleteuser', loginController.login, loginController.adminRequire, userController.deleteUser);
router.post('/updateschool', loginController.login, loginController.adminRequire, userController.usersDetailSchool);
router.post('/updatemajor', loginController.login, loginController.adminRequire, userController.usersDetailMajor);
router.post('/updatestate', loginController.login, loginController.adminRequire, userController.usersDetailState);
module.exports = router;
