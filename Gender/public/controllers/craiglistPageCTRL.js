
myApp.controller('craigCTRL', function($scope,$http) {
    
   $scope.categories=[
       {name: 'sport', icon:'shopping_cart', type:1},
       {name: 'lavoro' ,icon:'insert_emoticon',type:2},
       {name: 'hobbie', icon:'work',type:1},
       {name: 'sport',type:2},
       {name: 'sport',type:1},
       {name: 'sport',type:2},
       {name: 'sport',type:1},
       {name: 'sport',type:2},
       {name: 'sport'}
   ]
   
//    $http.get('/category').
//    success(function(data, status, headers, config) {
//      $scope.categories = data;
//    }).
//    error(function(data, status, headers, config) {
//        console.log(data);
//   });
    
    
});