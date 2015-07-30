
myApp.controller('forumPageCRT', function($scope,$http) {
   $scope.data={}; 
    $scope.type='forum';
   $scope.data.prev = null;
    
   $http.get('/forum').
    success(function(data, status, headers, config) {
      $scope.data = data;
      $scope.data.prev = data.parentCategory;
    }).
    error(function(data, status, headers, config) {
        console.log(data);
   });
    
    
    
    
    $scope.chooseCategry= function(index){
        $http.get('/forum/'+$scope.data.categories[index]._id).
        success(function(data, status, headers, config) {
          $scope.data = data;
            console.log( data.parentCategory);
          $scope.data.prev = data.parentCategory;

        }).
        error(function(data, status, headers, config) {
            console.error(data);
       });
    }
    
    $scope.clicksd= function(){
       $http.get('/forum/back/'+$scope.data.prev).
        success(function(data, status, headers, config) {
          $scope.data = data;
          $scope.data.prev = data.parentCategory;
        }).
        error(function(data, status, headers, config) {
            console.error(data);
       });
    }
    
     $scope.clickDiscussion= function(index){
         
         window.location.hash='/discussion/'+$scope.data.info[index]._id;

    }
    
});


