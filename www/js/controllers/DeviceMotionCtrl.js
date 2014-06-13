angular.module('app')

.controller('DeviceMotionCtrl', function($scope, $cordovaDeviceMotion) {

        $scope.getAcceleration = function () {
            $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
                $scope.getCurrentAccelerationX = result.x;
                $scope.getCurrentAccelerationY = result.y;
                $scope.getCurrentAccelerationZ = result.z;
            }, function(err) {
                // An error occured. Show a message to the user
            });
        };

        $scope.watchAcceleration = function () {
            var options = { frequency: 1000 };  // Update every 1 seconds

            var watchID = $cordovaDeviceMotion.watchAcceleration(options).then(
                function() {/* unused */},
                function(err) {},
                function(acceleration) {
                    $scope.X = acceleration.x;
                    $scope.Y = acceleration.y;
                    $scope.Z = acceleration.z;
                });
        };

        $scope.clearWatch = function() {
            // use watchID from watchAccelaration()
            $cordovaDeviceMotion.clearWatch(watchID).then(function(result) {
                // Success!
            }, function(err) {
                // An error occured. Show a message to the user
            });
        }
    });


