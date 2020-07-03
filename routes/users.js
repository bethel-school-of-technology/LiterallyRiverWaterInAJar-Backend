var express = require('express');
var router = express.Router();
var models =require('../models');
var authService = require("../services/auth");


// router.get('/', function (req, res, next) {
//   res.render('login', { title: 'Users' });
// });

//Signup Routes//
router.get('/signup', function (req, res, next) {
  res.render('signup');
});

router.post('/signup', function (req, res, next) {
  models.users
    .findOrCreate({
      where: {
        Username: req.body.username
      },
      defaults: {
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Password: authService.hashPassword(req.body.password)
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.redirect('login');
      } else {
        res.send('This username already exists. Choose a different username and try again.');
      }
    });
});


//Login Routes//
router.get('/login', function (req, res, next) {
  res.render('login');
});

router.post('/login', function (req, res, next) {
  models.users.findOne({
    where: {
      Username: req.body.username
    }
  }).then(user => {  
    if (!user) {
      console.log('User not found')
      res.status(401);
      res.send('Login Failed. Usernames are case sensitive. Check your username and try again.');
    } 
    else {
      let passwordMatch = authService.comparePasswords(req.body.password, user.Password);
      if (passwordMatch) {
        let token = authService.signUser(user);
        res.cookie('jwt', token);
        res.redirect('/users/profile')
      } 
      else {
        console.log('Wrong password');
        res.redirect('login');
      }
    }
  });
});

//Profile Route//
router.get('/profile', function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyUser(token)
      .then(user => {
        if (user) {
          models.users.findOne({
            where: {
              Username: user.Username
            },
            include: [{
              model: models.posts,
              where: {Deleted: false},
              required: false
            }]
          }).then(userpostsFound => {
            console.log(userpostsFound);
            res.render('profile', { userData: userpostsFound }
            );
          })
        } else {
          res.status(401);
          res.send('Must be logged in');
        }
      });
  }
});


//Logout Route//
router.get('/logout', function (req, res, next) {
  res.cookie('jwt', "", { expires: new Date(0) });
  res.redirect('login');
});


module.exports = router;
