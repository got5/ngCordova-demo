angular.module('app')

.controller('BarcodeScannerCtrl', function($scope, $cordovaBarcodeScanner) {

    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            // Success! Barcode data is here
            $scope.text =  imageData.text;
            $scope.format =  imageData.format;
            $scope.cancelled =  imageData.cancelled;

        }, function(err) {
            $scope.error =  imageData.error;
        });
    };

    // NOTE: encoding not functioning yet
    $scope.encodeData = function() {
        $cordovaBarcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com").then(function(success) {
            // Success!
        }, function(err) {
            // An error occured. Show a message to the user

        });
    }
});


