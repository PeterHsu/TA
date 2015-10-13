angular.module('TA',['ngRoute','ngResource'])
.factory('Stock',function($resource){
  return $resource('/stock/api/:id',{},{
    update:{method:'PUT'}
  });
})
.directive("ptStock",function(){
  return {
      restrict:'E',
      templateUrl:'/pages/stock.html',
      controller: function($scope,Stock){
        $scope.stocks = Stock.query();
      }
  };
});
