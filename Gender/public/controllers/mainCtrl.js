var myApp = angular.module('myApp',["ngRoute"]);

myApp.controller('mainCtrl', ['$scope', function($scope) {
	$scope.categories = ['cane', 'gatto', 'gallina', 'topo','cinghiale','gorilla'];

	$scope.changeFontSize = function(step){
		step = parseInt(step,10);
		var el = document.getElementsByClassName("fontResizable");
		console.log(el.length);
        
        for(a=0 ; a < el.length; a++){
            var curFont = parseInt(el[a].style.fontSize,10)||14;
            el[a].style.fontSize = (curFont+step) + 'px';
        
        }
        
//        var curFont = parseInt(el.style.fontSize,10);
//		el.style.fontSize = (curFont+step) + 'px';
	}

}]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/info', {
        templateUrl: 'Info.html',
        //controller: 'PhoneListCtrl'
      }).
    when('/activity', {
        templateUrl: 'attivita.html',
        //controller: 'PhoneListCtrl'
      }).
    when('/chisiamo', {
        templateUrl: 'chiSiamo.html',
        //controller: 'PhoneListCtrl'
      }).
      otherwise({
        redirectTo: '/index.html'
      });
  }]);