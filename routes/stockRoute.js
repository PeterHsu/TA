var express = require('express');
var stock = require('../models/stockModel');
var router = express.Router();
router.get('/api',function(req, res, next){
  stock.find(function(err, data){
    if(err) return next(err);
    res.json(data);
  });
});
module.exports = router;
