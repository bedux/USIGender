
myApp.controller('craigCTRL', function($scope,$http, $log, $rootScope, uiGmapGoogleMapApi) {
    $scope.craig= {};

    $scope.craig.prev = null;
    $scope.addSectionVisibility = false;
    $scope.fabIcon = 'add';
    $scope.chooseTypeVisibility = true;
    $scope.typeChose='';
    $scope.attachment={};
    $scope.craig.info = [];
    
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

    $scope.clickBack= function(){
        updateList('/category/back/'+  $scope.craig.prev);
    }

    $scope.addAttachmentToggle = function(){
        if( $scope.addSectionVisibility){
            $scope.addSectionVisibility = false;
            $scope.fabIcon = 'add'
            $scope.chooseTypeVisibility = true;
            $scope.typeChose='';
        }else{
            $scope.addSectionVisibility = true;
            $scope.fabIcon = 'clear'
            document.getElementById('scroll').scrollIntoView();
        }

    }

    $scope.attachmentChose = function(type){
        switch(type){
            case 'info':
                $scope.chooseTypeVisibility = false;
                $scope.typeChose='info';
                break;
            case 'place':
                $scope.chooseTypeVisibility = false;
                $scope.typeChose='place';
                break;
            case 'contact':
                $scope.chooseTypeVisibility = false;
                $scope.typeChose='contact';
                break;
            default:
                $scope.typeChose='';
                break;

        }
    }

    $scope.postAttachment= function(attachment, type){
        attachment.type = type;
        // Simple POST request example (passing data) :
        $http.post('/attachment', attachment).
          success(function(data, status, headers, config) {
            console.log(data);
            $scope.craig.info.push(data);
            
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(data);
          });
    }
    
    $scope.typeFilter = function(info) {
        if ($rootScope.typeFilter.length > 0) {
            if ($.inArray(info.type, $rootScope.typeFilter) < 0)
                return;
        }
        
        return info;
    }
    
    // map
    $scope.craigMap = { center: { latitude: 46.02651, longitude: 8.85418}, zoom: 12 };

    $scope.options2 = {scrollwheel: true};
        
        var events = {
        places_changed: function (searchBox) {}
    }
    $scope.searchbox2 = { template:'searchbox.tpl.html', 
                         events:events, parentId:'craiMapSearch'};
        $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 46.005528779358016,
        longitude: 8.957176826171917
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
      $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
      if (_.isEqual(newVal, oldVal))
        return;
      $scope.coordsUpdates++;
    });
});
