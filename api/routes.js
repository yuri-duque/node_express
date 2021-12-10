const {Router} = require('express');

const userController = require('./controllers/userController');

var router = Router();

// -- USER ROUTES -- //

// GET - request to all users
router.get("/user", userController.getAll);

module.exports = router;