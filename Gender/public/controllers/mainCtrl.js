var myApp = angular.module('myApp',[]);

myApp.controller('mainCtrl', ['$scope', function($scope) {
  $scope.categories = ['cane', 'gatto', 'gallina', 'topo','cinghiale','gorilla'];
}]);