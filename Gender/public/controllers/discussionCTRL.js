
myApp.controller('discussionCTRL', function($scope,$http,$routeParams) {
   // $scope.craig= {};
console.log($routeParams);
    
    
    
    
    $scope.orightml = '';
		$scope.htmlcontent = $scope.orightml;
		$scope.disabled = false;
    
    
    
    
    $scope.checked=true;
    
    
        $scope.data = {};
    
    
    $scope.replyClick = function(){
          $scope.checked=false;
        console.log("cliccat");
        
    }
       $http.get('/discussion/'+$routeParams.id).
        success(function(data, status, headers, config) {
           $scope.data=data;
           console.log(data);
           
        }).
        error(function(data, status, headers, config) {
            console.error(data);
       });
    
    
    $scope.sendReply= function(){
        console.log($scope.htmlcontent);
        $http.post('/reply',{message:$scope.htmlcontent,user:"559ff7fbe332ff9c9892839b",discussion:$routeParams.id}).
        success(function(data, status, headers, config) {
           
           console.log(data);
           
        }).
        error(function(data, status, headers, config) {
            console.error(data);
       });
        
    }
    
    
    
});