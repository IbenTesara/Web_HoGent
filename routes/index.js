var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var VideoPost = mongoose.model('VideoPost');
var EventPost = mongoose.model('EventPost');
var passport = require('passport');
var User = mongoose.model('User');
var jwt = require('express-jwt');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/videos', function(req, res, next) {
  VideoPost.find(function(err, videos){
    if(err){ return next(err); }

    res.json(videos);
  });
});


router.post('/videos',auth, function(req, res, next) {
  var video = new VideoPost(req.body);

  video.save(function(err, video){
    if(err){ return next(err); }

    res.json(video);
  });
});

router.get('/events', function(req, res, next) {
  EventPost.find(function(err, events){
    if(err){ return next(err); }

    res.json(events);
  });
});


router.post('/events',auth, function(req, res, next) {
  var eventx = new EventPost(req.body);

  eventx.save(function(err, events){
    if(err){ return next(err); }

    res.json(eventx);
  });
});


router.post('/register', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  var user = new User();

  user.username = req.body.username;

  user.setPassword(req.body.password)

  user.save(function (err){
    if(err){ return next(err); }

    return res.json({token: user.generateJWT()})
  });
});


router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});




module.exports = router;


