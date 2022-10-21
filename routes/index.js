var express = require('express');
const { Register, Login, Test } = require('../controllers/users.controllers');
var router = express.Router();
const passport=require('passport')

/* GET home page. */
router.post('/register',Register  );
router.post('/login',Login  );


//pT









//Test
router.get('/test', passport.authenticate('jwt', { session: false }),Test)

module.exports = router;
