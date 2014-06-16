angular.module('app')

.controller('DeviceOrientationCtrl', function($scope, $cordovaDeviceOrientation) {

  /*  $scope.getCurrentHeading = function(){

        $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
            // Success!
            $scope.magneticHeading = result.magneticHeading;
            $scope.trueHeading = result.trueHeading;
            $scope.headingAccuracy = result.headingAccuracy;
        }, function(err) {
            alert('CompassError: ' + err.code);
            // An error occured. Show a message to the user
        });
    };
*/
    $scope.watchHeading = function(){
        var options = { frequency: 1000 }; // Update every 1 seconds

        $cordovaDeviceOrientation.watchHeading(options).then(function(result) {
            // returns watch ID to be used in clearWatch
            $scope.watchmagneticHeading = result.magneticHeading;
            $scope.watchtrueHeading = result.trueHeading;
            $scope.watchheadingAccuracy = result.headingAccuracy;

        }, function(err) {
            alert('Compass error: ' + err.code);
        });
    };
/*
    // use the watch ID from watchHeading() promise
    $scope.clear = function(){
        $cordovaDeviceOrientation.clearWatch(watchID).then(function(result) {
            // Success!
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }*/
});


