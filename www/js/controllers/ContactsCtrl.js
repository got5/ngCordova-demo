angular.module('app')

.controller('ContactsCtrl', function($scope, $cordovaContacts) {
        /*
        Properties
        id: A globally unique identifier. (DOMString)
        displayName: The name of this Contact, suitable for display to end users. (DOMString)
        name: An object containing all components of a persons name. (ContactName)
        nickname: A casual name by which to address the contact. (DOMString)
        phoneNumbers: An array of all the contact's phone numbers. (ContactField[])
        emails: An array of all the contact's email addresses. (ContactField[])
        addresses: An array of all the contact's addresses. (ContactAddress[])
        ims: An array of all the contact's IM addresses. (ContactField[])
        organizations: An array of all the contact's organizations. (ContactOrganization[])
        birthday: The birthday of the contact. (Date)
        note: A note about the contact. (DOMString)
        photos: An array of the contact's photos. (ContactField[])
        categories: An array of all the user-defined categories associated with the contact. (ContactField[])
        urls: An array of web pages associated with the contact. (ContactField[])
        */
        var zidane = {
            "displayName": "Zidane"
        };
        $scope.saveContact = function() {

            $cordovaContacts.save(zidane).then(function(result) {
                // Contact saved
                alert("Contact save in your contact list");
            }, function(err) {
                alert("Error");
            });
        };
        // Many more features, see the docs below

});


