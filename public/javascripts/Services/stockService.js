angular.module('TA')
.factory('Stock',function StockFactory($resource){
  return $resource('/stock/api/:id',{},{
    update:{method:'PUT'}
  });
});
