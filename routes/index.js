var express = require('express');
const { Register, Login, Test } = require('../controllers/users.controllers');
var router = express.Router();

/* GET home page. */
router.post('/register',Register  );
router.post('/login',Login  );









//Test
router.get('/test',Test)

module.exports = router;
