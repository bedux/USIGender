
myApp.controller('craigCTRL', function($scope,$http) {
    
//   $scope.categories=[
//       {name: 'sport', icon:'shopping_cart'},
//       {name: 'lavoro' ,icon:'insert_emoticon'},
//       {name: 'hobbie', icon:'work'},
//       {name: 'sport'},
//       {name: 'sport'},
//       {name: 'sport'},
//       {name: 'sport'},
//       {name: 'sport'},
//       {name: 'sport'}
//   ]
   
    $http.get('/category').
    success(function(data, status, headers, config) {
      $scope.categories = data;
    }).
    error(function(data, status, headers, config) {
        console.log(data);
   });
    
    
});