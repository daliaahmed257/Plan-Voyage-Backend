// DEPENDENCIES
const express = require("express")
const router = express.Router()
const passport = require('passport')

const tripsCtrl = require('../controllers/trips')

//ROUTES

//TRIPS INDEX ROUTE
router.get("/", tripsCtrl.index)

//TRIPS CREATE ROUTE
router.post("/", tripsCtrl.create)

//TRIPS SHOW ROUTE
router.get("/:id", tripsCtrl.show)

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    // Which passport strategy is being used?
    'google',
    {
      // Requesting the user's profile and email
      scope: ['profile', 'email'],
      // Optionally force pick account every time
      // prompt: "select_account"
    }
  ));

  // Google OAuth callback route
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/mytrips',
      failureRedirect: '/explore'
    }
  ));

// OAuth logout route
router.get('/logout', function(req, res){
    req.logout(function() {
      res.redirect('/mytrips');
    });
  });


module.exports = router