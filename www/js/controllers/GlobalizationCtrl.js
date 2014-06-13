angular.module('app')

.controller('GlobalizationCtrl', function($scope, $cordovaGlobalization) {
    $cordovaGlobalization.getPreferredLanguage().then(
        function(result) {
            $scope.preferredLanguage = result.value;
        },
        function(error) {
            // error
        });

    $cordovaGlobalization.getLocaleName().then(
        function(result) {
            $scope.localName = result.value;
        },
        function(error) {
            // error
        });

    $cordovaGlobalization.getFirstDayOfWeek().then(
        function(result) {
            $scope.firstDay = result.value;
        },
        function(error) {
            // error
        });

    // Soon implemented:
    // dateToString
    // stringToDate
    // getDatePattern
    // getDateNames
    // isDayLightSavingsTime
    // numberToString
    // stringToNumber
    // getNumberPattern
    // getCurrencyPattern

});


