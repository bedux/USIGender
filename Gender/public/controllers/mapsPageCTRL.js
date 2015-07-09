
myApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization,places'
    });
})


myApp.controller('mapsCTRL', function($scope,$http, uiGmapGoogleMapApi) {
    
// Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.

    $scope.map = { 
        center: { latitude: 45, longitude: -73 }, 
        zoom: 8 
    };
        uiGmapGoogleMapApi.then(function(maps) {

        });
    $scope.marker = {
        coords:{
            latitude: 45, longitude: -73 
        }
    }
    
 
    var events = {
          places_changed: function (searchBox) {}
        }
    $scope.searchbox = { template:'searchbox.tpl.html', events:events};
      

    
    
});