var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var VideoPost = mongoose.model('VideoPost');

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


router.post('/videos', function(req, res, next) {
  var video = new VideoPost(req.body);

  video.save(function(err, video){
    if(err){ return next(err); }

    res.json(video);
  });
});





module.exports = router;


