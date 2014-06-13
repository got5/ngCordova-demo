angular.module('app')

.controller('ContactsCtrl', function($scope, $cordovaContacts) {

        var zidane = {"Zidane": "the best"};
        $scope.saveContact = function() {
            $cordovaContacts.save(zidane).then(function(result) {
                // Contact saved
            }, function(err) {
                // Contact error
            });
        };
        // Many more features, see the docs below

});


