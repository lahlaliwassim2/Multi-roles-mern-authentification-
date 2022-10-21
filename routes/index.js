var express = require('express');
const { Register, Login, Test } = require('../controllers/users.controllers');
var router = express.Router();
const passport=require('passport')
const {ROLES,inRole} = require('../security/RoleMiddlewere')

/* GET home page. */
router.post('/register',Register  );
router.post('/login',Login  );


//pT









//Test
router.get('/test', 
passport.authenticate('jwt', { session: false }),
inRole(ROLES.USER),
Test)
router.get('/admin',
 passport.authenticate('jwt', { session: false }),
 inRole(ROLES.ADMIN),
 Test)

module.exports = router;
