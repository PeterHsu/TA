var express = require('express');
var stock = require('../models/stockModel');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('stock');
});
router.get('/api',function(req, res, next){
  stock.find(function(err, data){
    if(err) return next(err);
    res.json(data);
  });
});
router.post('/api',function(req,res,next){
  stock.create(req.body,function(err,data){
    if(err) return next(err);
    res.json(data);
  });
});
router.get('/api/:id',function(req,res,next){
  stock.findById(req.params.id,function(err,data){
    if(err) return next(err);
    res.json(data);
  });
});
router.put('/api/:id',function(req,res,next){
  stock.findByIdAndUpdate(req.params.id,req.body,function(err,data){
    if(err) return next(err);
    res.json(data);
  });
});
router.delete('/api/:id',function(req,res,next){
  stock.findByIdAndRemove(req.params.id,function(err,data){
    if(err) return next(err);
    res.json(data);
  });
});
module.exports = router;
