angular.module('app')

.controller('PushCtrl', function($scope, $cordovaPush) {

        var androidConfig = {
            "senderID":"562822624238",
            "ecb":"onNotification"
        };

        var iosConfig = {
            "badge":"true",
            "sound":"true",
            "alert":"true",
            "ecb":"onNotificationAPN"
        };

        $cordovaPush.register(config).then(function(result) {
            // Success!
        }, function(err) {
            // An error occured. Show a message to the user
        });


        $cordovaPush.unregister(options).then(function(result) {
            // Success!
        }, function(err) {
            // An error occured. Show a message to the user
        });

        // iOS only
        $cordovaPush.setBadgeNumber(2).then(function(result) {
            // Success!
        }, function(err) {
            // An error occured. Show a message to the user
        });

});

