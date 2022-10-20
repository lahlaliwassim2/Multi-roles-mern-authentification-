var express = require('express');
const { Register, Login } = require('../controllers/users.controllers');
var router = express.Router();

/* GET home page. */
router.post('/register',Register  );
router.post('/login',Login  );

module.exports = router;
