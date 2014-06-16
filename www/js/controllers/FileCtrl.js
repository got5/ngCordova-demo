angular.module('app')

.controller('FileCtrl', function($scope, $cordovaFile) {

        //$scope.directory = window.resolveLocalFileSystemURL();

        $scope.checkDir = function() {
            $cordovaFile.checkDir(directory).then(function (result) {
                // Success!
            }, function (err) {
                // An error occured. Show a message to the user
            });
        }

        $scope.createDir = function() {
            // parameters: directory, replace (boolean)
            $cordovaFile.createDir(directory, false).then(function (result) {
                // Success!
            }, function (err) {
                // An error occured. Show a message to the user
            });
        }

        $scope.checkFile = function() {
            $cordovaFile.checkFile(directory, file).then(function (result) {
                // Success!
            }, function (err) {
                // An error occured. Show a message to the user
            });
        }

        $scope.createFile = function() {
            // parameters: directory, file, replace (boolean)
            $cordovaFile.createFile(directory, file, true).then(function (result) {
                // Success!
            }, function (err) {
                // An error occured. Show a message to the user
            });
        }

        $scope.removeFile = function() {
            $cordovaFile.removeFile(directory, file).then(function (result) {
                // Success!
            }, function (err) {
                // An error occured. Show a message to the user
            });
        }

        $scope.writeFile = function() {
            // doesn't function at the moment
            $cordovaFile.writeFile(directory, file).then(function (result) {
                // Success!
            }, function (err) {
                // An error occured. Show a message to the user
            });
        }


        $scope.readFile = function() {
            // Reads a file as TEXT
            $cordovaFile.readFile(directory, file).then(function (result) {
                // Success!
            }, function (err) {
                // An error occured. Show a message to the user
            });
        }

        $scope.downloadFile = function() {
            // parameters: source, filePath, trust all hosts (boolean), options
            $cordovaFile.downloadFile(source, filePath, true, options).then(function (result) {
                // Success!
            }, function (err) {
                // An error occured. Show a message to the user
            });
        }

        $scope.uploadFile = function() {
            // parameters: source, filePath, options
            $cordovaFile.uploadFile(server, filePath, options).then(function (result) {
                // Success!
            }, function (err) {
                // An error occured. Show a message to the user
            });
        }
});


