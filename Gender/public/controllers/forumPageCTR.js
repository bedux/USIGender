var myApp = angular.module('myApp',[]);

myApp.controller('forumPageCRT', function($scope,$http) {
    
   $http.get('/forum').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
        console.log(data);
   });
    
});


