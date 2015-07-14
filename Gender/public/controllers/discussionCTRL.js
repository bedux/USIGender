
myApp.controller('discussionCTRL', function($scope,$http,$routeParams) {
   // $scope.craig= {};
console.log($routeParams);
    
        $scope.data = {};
       $http.get('/discussion/'+$routeParams.id).
        success(function(data, status, headers, config) {
           $scope.data=data;
           console.log(data);
           
        }).
        error(function(data, status, headers, config) {
            console.error(data);
       });
});