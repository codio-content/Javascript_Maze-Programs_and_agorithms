
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();


// blockly script for tea-1
router.get('/tea-1-b', function(req, res) {
  res.render('tea-1-b');
});

// blockly script for tea-2 challenge
router.get('/tea-2-b', function(req, res) {
  res.render('tea-2-b');
});


module.exports = router;
