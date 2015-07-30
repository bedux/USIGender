var myApp = angular.module('myApp',["ngRoute",'uiGmapgoogle-maps','ui.calendar', 'ui.bootstrap','textAngular'])
myApp.run(function($rootScope){
   $rootScope.typeFilter = []; 
});

myApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization,places'
    });
})

myApp.config( function($routeProvider) {
    $routeProvider.
      when('/craigslist', {
        templateUrl: 'models/craiglistPage.html',
        controller: 'craigCTRL'
      }).
    when('/forum', {
        templateUrl: 'models/forumPage.html',
        controller: 'forumPageCRT'
      }).
    when('/maps', {
        templateUrl: 'models/mapsPage.html',
        controller: 'mapsCTRL'
      })
    .when('/calendar', {
        templateUrl: 'models/calendarPage.html',
        //controller: 'PhoneListCtrl'
      })
    .when('/discussion/:id', {
        templateUrl: 'models/discussionPage.html',
        //controller: 'PhoneListCtrl'
        controller: 'discussionCTRL'

      })
        .otherwise({
        redirectTo: '/craigslist'
      });
  });


myApp.directive('attachmentItem', function(){
    return{
        restrict: 'E',
        scope:{
            itemData : '=itemData',
            type: '=type' // mandatory if not define in itemdata
        },
        templateUrl:'../models/attachmentPage.html',
    };
});


myApp.directive('addAttachment', function(){
    return{
        restrict: 'E',
        templateUrl:'../models/addAttachmentPage.html',
    };
});

myApp.controller('mainCtrl',  function($scope, $rootScope) {
	$scope.categories = ['place', 'info', 'contact'];

	$scope.changeFontSize = function(step){
		step = parseInt(step,10);
		var el = document.getElementsByClassName("fontResizable");
		console.log(el.length);
        
        for(a=0 ; a < el.length; a++){
            var curFont = parseInt(el[a].style.fontSize,10)||14;
            el[a].style.fontSize = (curFont+step) + 'px'; 
        }
	}
    
    $scope.path = function(path){
        window.location.hash = '/'+path;
    }

    $scope.includeType = function(type) {
        
        var i = $.inArray(type, $rootScope.typeFilter);
        if (i > -1) {
            $rootScope.typeFilter.splice(i, 1);
        } else {
            $rootScope.typeFilter.push(type);
        }
    }
});




