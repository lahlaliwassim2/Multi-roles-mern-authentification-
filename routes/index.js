var express = require('express');
const { Register, Login, Test } = require('../controllers/users.controllers');
var router = express.Router();
const passport=require('passport')
const {ROLES,inRole} = require('../security/RoleMiddlewere');
const { AddProfile, FindAllProfiles, FindSingleProfil, DeleteProfil } = require('../controllers/profiles.controllers');

/* GET home page. */
router.post('/register',Register  );
router.post('/login',Login  );





router.post('/profiles', 
passport.authenticate('jwt', { session: false }),
AddProfile)

router.get('/profiles', 
passport.authenticate('jwt', { session: false }),
inRole(ROLES.ADMIN ),
FindAllProfiles)

router.get('/profile', 
passport.authenticate('jwt', { session: false }),
FindSingleProfil)

router.delete('/profiles/:id', 
passport.authenticate('jwt', { session: false }),
inRole(ROLES.USER),
DeleteProfil)




//Test
// router.get('/test', 
// passport.authenticate('jwt', { session: false }),
// inRole(ROLES.USER),
// Test)
// router.get('/admin',
//  passport.authenticate('jwt', { session: false }),
//  inRole(ROLES.ADMIN),
//  Test)

module.exports = router;
