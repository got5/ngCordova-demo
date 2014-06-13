angular.module('app')

.controller('PinDialogCtrl', function($scope, $cordovaPinDialog) {

        $scope.pin = function(){
            $cordovaPinDialog.prompt('Number').then(
                function(result) {

                },
                function (error) {

                })
        };

    });

