angular.module('app')

.controller('DeviceCtrl', function($scope, $cordovaDevice) {

        $scope.device = $cordovaDevice.getDevice();
        $scope.cordova = $cordovaDevice.getCordova();
        $scope.model = $cordovaDevice.getModel();
        $scope.platform = $cordovaDevice.getPlatform();
        $scope.uuid = $cordovaDevice.getUUID();
        $scope.version = $cordovaDevice.getVersion();

});


