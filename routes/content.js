
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();


// blockly script for tea-1
router.get('/tea-1', function(req, res) {
  res.render('tea-1');
});



module.exports = router;
