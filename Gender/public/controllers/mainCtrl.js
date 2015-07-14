var myApp = angular.module('myApp',["ngRoute",'uiGmapgoogle-maps']);

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




myApp.controller('mainCtrl', ['$scope', function($scope) {
	$scope.categories = ['cane', 'gattosdsddsda', 'gallina', 'topo','cinghiale','gorilla'];

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

}]);

