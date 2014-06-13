angular.module('app')

.controller('DialogsCtrl', function($scope, $cordovaDialogs) {

        $scope.alert = function(){
            $cordovaDialogs.alert('Wow this a alert !');
        }

        $scope.confirm = function(){
            $cordovaDialogs.confirm('Are you sure?');
        }

        $scope.prompt = function(){
            $cordovaDialogs.prompt('Please Login');
        }

        $scope.beep = function(){
            // beep 3 times
            $cordovaDialogs.beep(3);
        }
});


