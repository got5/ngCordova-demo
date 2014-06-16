angular.module('app')

.controller('GeolocationCtrl', function($scope, $cordovaGeolocation) {


            $cordovaGeolocation.getCurrentPosition().then(function (position) {
                    $scope.lat = position.coords.latitude;
                    $scope.long = position.coords.longitude;

                // Position here: position.coords.latitude, position.coords.longitude
            }, function (err) {
                // error
            });

            $cordovaGeolocation.watchPosition().then(function () {
                // Not currently used
            }, function (err) {
                // An error occured. Show a message to the user
            }, function (position) {
                $scope.watchLat = position.coords.latitude;
                $scope.watchLong = position.coords.longitude;
            });

});


