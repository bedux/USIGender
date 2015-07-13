
myApp.controller('craigCTRL', function($scope,$http) {
    $scope.craig= {};

    $scope.craig.prev = null;
    
    
    
    updateList = function(path){
        $http.get(path).
            success(function(data, status, headers, config) {
                $scope.craig.categories = data.categories;
                $scope.craig.info = data.info;
                $scope.craig.prev = data.parentCategory;
            }).
            error(function(data, status, headers, config) {
                console.log(data);
            });
    }
    
    updateList('/category');

    
    $scope.chooseCategry= function(index){
        updateList('/category/'+$scope.craig.categories[index]._id);
    }

    $scope.clicksd= function(){
        updateList('/category/back/'+  $scope.craig.prev);
    }
});