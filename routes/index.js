var express = require('express');
const db = require('../db');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: "Moe's Netflix", 
    data : db,
  });
});

router.get('/:ID', function(req,res,next) {
  const { ID } = req.params;
  const currentMovie = db.find(movie => movie.imdbID === ID);
  if(currentMovie){
    res.render('movie', {
      title: "Moe's Netflix",
      data: currentMovie
    });
  };
});

module.exports = router;
