angular.module('app')

.controller('NetworkCtrl', function($scope, $cordovaNetwork) {
        $scope.type = $cordovaNetwork.getNetwork();
        $scope.isOnline = $cordovaNetwork.isOnline();
});


