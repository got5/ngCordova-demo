angular.module('app')

.controller('SplashScreenCtrl', function($scope, $cordovaSplashscreen) {
        $scope.display = function(){
            $cordovaSplashscreen.show();
            $cordovaSplashscreen.hide();
        }

});

