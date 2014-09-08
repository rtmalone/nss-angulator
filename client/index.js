(function(){
  'use strict';

  angular.module('angulator', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.display = '0';

    $scope.clearDisplay = function(){
      $scope.display = '0';
    };

    $scope.addDisplay = function(num){
      num = num.toString();
      $scope.display += num;
    };

    $scope.calculate = function(opp){
      $scope.operator = opp;
      $scope.memory = $scope.display;
      $scope.clearDisplay();
    };

    $scope.equals = function(){
    };
  }]);
})();
