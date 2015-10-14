angular.module('TA',['ngRoute','ngResource'])
.factory('Stock',function($resource){
  return $resource('/stock/api/:id',{id:'@_id'},{
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
})
.config(function($routeProvider){
  $routeProvider
  .when('/',{
    redirectTo:'/index'
  })
  .when('/index',{
    templateUrl:'/pages/stock/index.html',
    controller:function($scope, Stock){
      $scope.stocks = Stock.query();

      $scope.stock = new Stock();
      $scope.save = function(stock){
        stock.$save(stock);
        $scope.stocks = Stock.query();
      }
      $scope.get = function(stock){
        $scope.stock = Stock.get({id:stock._id});
      }
      $scope.delete = function(stock){
        stock.$delete({id:stock._id});
        $scope.stocks = Stock.query();
      }
      $scope.update = function(stock){
        Stock.update(stock);
        $scope.stocks = Stock.query();
      }
    }
  })
});
