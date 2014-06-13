angular.module('app')

.controller('ToastCtrl', function($scope, $cordovaToast) {

        /*
        show(message, duration, position)

        duration: 'short', 'long'
        position: 'top', 'center', 'bottom'

        You can also use any of these convenience methods
            showShortTop(message)
            showShortCenter(message)
            showShortBottom(message)
            showLongTop(message)
            showLongCenter(message)
            showLongBottom(message)
        */

        $scope.show = function(){
            $cordovaToast.show('It is a toast', 'long', 'center').then(function(success) {
                // success
            }, function (error) {
                // error
            });
        }

        $scope.showST = function(){
            $cordovaToast.showShortTop('It is a short toast in top').then(function(success) {
                // success
            }, function (error) {
                // error
            });
        }

        $scope.showLB = function(){
            $cordovaToast.showLongBottom('It is a long toast in bottom').then(function(success) {
                // success
            }, function (error) {
                // error
            });
        }



});

