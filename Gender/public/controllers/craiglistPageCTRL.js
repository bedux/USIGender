
myApp.controller('craigCTRL', function($scope,$http) {
    $scope.craig= {};

    $scope.craig.prev = null;
    $scope.addSectionVisibility = false;
    $scope.fabIcon = 'add';
    $scope.chooseTypeVisibility = true;
    $scope.typeChose='';
    
    
    
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

});
