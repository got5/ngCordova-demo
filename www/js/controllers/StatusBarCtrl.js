angular.module('app')

.controller('StatusBarCtrl', function($scope, $cordovaStatusbar) {

        $cordovaStatusbar.overlaysWebView(true);

        // styles: Default : 0, LightContent: 1, BlackTranslucent: 2, BlackOpaque: 3
        $cordovaStatusbar.style(1);

        // supported names: black, darkGray, lightGray, white, gray, red, green,
        // blue, cyan, yellow, magenta, orange, purple, brown
        $scope.black = function() {
            $cordovaStatusbar.styleColor('black');
        }
        $scope.white = function() {
            $cordovaStatusbar.styleColor('white');
        }

        $cordovaStatusbar.styleHex('#000');

        $scope.hide = function() {
            $cordovaStatusbar.hide();
        }

        $scope.show = function() {
            $cordovaStatusbar.show();
        }

        var isVisible = $cordovaStatusbar.isVisible();
});

