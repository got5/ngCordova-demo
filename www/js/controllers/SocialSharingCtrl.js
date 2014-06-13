angular.module('app')

.controller('SocialSharingCtrl', function($scope, $cordovaSocialSharing) {

    var message = "Yeah i share by cordova !";
    var image = null;
    var link = "http://cordova.apache.org/";
    var number = "0625252525";
    var subject = "Hello i am a subject";
    var toArr = "bidon@gmail.com";
    var bccArr = "null@gmail.com";
    var file = null;

    $scope.twitter = function(){
        $cordovaSocialSharing.shareViaTwitter(message, image, link).then(function(result) {
            // Success!
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }
    $scope.whatsapp = function() {
        $cordovaSocialSharing.shareViaWhatsApp(message, image, link).then(function (result) {
            // Success!
        }, function (err) {
            // An error occured. Show a message to the user
        });
    }

    $scope.facebook = function() {
        $cordovaSocialSharing.shareViaFacebook(message, image, link).then(function (result) {
            // Success!
        }, function (err) {
            // An error occured. Show a message to the user
        });
    }
    $scope.sms = function() {
        // access multiple numbers in a string like: '0612345678,0687654321'
        $cordovaSocialSharing.shareViaSMS(message, number).then(function (result) {
            // Success!
        }, function (err) {
            // An error occured. Show a message to the user
        });
    }
    $scope.email = function() {
        // TO, CC, BCC must be an array, Files can be either null, string or array
        $cordovaSocialSharing.shareViaEmail(message, subject, toArr, bccArr, file).then(
            function (result) {
                // Success!
            }, function (err) {
                // An error occured. Show a message to the user
            });
    }
    $scope.via = function() {
        $cordovaSocialSharing.canShareVia(socialType, message, image, link).then(
            function (result) {
                // Success!
            }, function (err) {
                // An error occured. Show a message to the user
            });
    }
});

