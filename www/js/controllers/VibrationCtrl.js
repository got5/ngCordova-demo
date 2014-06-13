angular.module('app')
.controller('VibrationCtrl', function($scope, $cordovaVibration) {
        $scope.getVibration = function(){
            $cordovaVibration.vibrate(1000);
        }
});


