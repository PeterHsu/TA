angular.module('TA')
.controller('StockController',function($scope,Stock){
  $scope.stocks = Stock.query();
});
