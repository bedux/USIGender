
myApp.controller('discussionCTRL', function($scope,$http,$routeParams,$sce,$rootScope) {
    // $scope.craig= {};
    console.log($routeParams);




    $scope.orightml = '';
    $scope.htmlcontent = $scope.orightml;
    $scope.disabled = false;




    $scope.checked=true;

    $scope.data = {};

    $scope.getHTML = function(html){
        return $sce.trustAsHtml(html);
    }

    $scope.replyClick = function(){
        $scope.checked=false;

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

    $scope.checked=true;
            
             $http.get('/discussion/'+$routeParams.id).
    success(function(data, status, headers, config) {
        $scope.data=data;
        console.log(data);

    }).
    error(function(data, status, headers, config) {
        console.error(data);
    });

        }).
        error(function(data, status, headers, config) {
            console.error(data);
        });

    }
    
    
    $rootScope.textAngularTools.colourRed = {
    display: "<button ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-square' style='color: red;'></i></button>",
    
        action: function(){
        console.log("asd");
        this.$parent.wrapSelection('formatBlock', '<span style="color: red">');
    },
    activeState: function(){return false;} //If this returns true then the ta-toolbar-button-active-class will be applied to the button.
};
    
    



});
