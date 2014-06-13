angular.module('app')

.controller('SpinnerDialogCtrl', function($scope, $cordovaSpinnerDialog) {

        // Show spinner dialog with message
        // Title and message only works on Android
        //window.plugins.spinnerDialog.show();
        $cordovaSpinnerDialog.show("Spinner dialog","click to stop");

        // Hide spinner dialog
        //$cordovaSpinnerDialog.hide();
});

