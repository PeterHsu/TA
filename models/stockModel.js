var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', function(err){
  if(err) console.log('連線失敗');
  else console.log('連線成功');
});
module.exports = mongoose.model('Stock',{
  _id: {type: Number}  ,
  Name: {type: String}
});
