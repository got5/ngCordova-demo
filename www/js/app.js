// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('app', ['ionic','ngCordova'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.accueil', {
                url: "/accueil",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/accueil.html",
                        controller: 'AccueilCtrl'
                    }
                }
            })
            .state('app.barcode-scanner', {
                url: "/barcode-scanner",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/barcode-scanner.html",
                        controller: 'BarcodeScannerCtrl'
                    }
                }
            })
            .state('app.camera', {
                url: "/camera",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/camera.html",
                        controller: 'CameraCtrl'
                    }
                }
            })
            .state('app.contacts', {
                url: "/contacts",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/contacts.html",
                        controller: 'ContactsCtrl'
                    }
                }
            })
               .state('app.device', {
             url: "/device",
             views: {
             'menuContent' :{
             templateUrl: "templates/device.html",
                 controller: 'DeviceCtrl'
             }
             }
             })

             .state('app.device-motion', {
             url: "/device-motion",
             views: {
             'menuContent' :{
             templateUrl: "templates/device-motion.html",
                 controller: 'DeviceMotionCtrl'
             }
             }
             })

             .state('app.device-orientation', {
             url: "/device-orientation",
             views: {
             'menuContent' :{
             templateUrl: "templates/device-orientation.html",
                 controller: 'DeviceOrientationCtrl'
             }
             }
             })

             .state('app.dialogs', {
             url: "/dialogs",
             views: {
             'menuContent' :{
             templateUrl: "templates/dialogs.html",
                 controller: 'DialogsCtrl'
             }
             }
             })

             .state('app.file', {
             url: "/file",
             views: {
             'menuContent' :{
             templateUrl: "templates/file.html",
                 controller: 'CameraCtrl'
             }
             }
             })


             .state('app.geolocation', {
             url: "/geolocation",
             views: {
             'menuContent' :{
             templateUrl: "templates/geolocation.html",
                 controller: 'GeolocationCtrl'
             }
             }
             })

             .state('app.globalization', {
             url: "/globalization",
             views: {
             'menuContent' :{
             templateUrl: "templates/globalization.html",
                 controller: 'GlobalizationCtrl'
             }
             }
             })

             .state('app.ionic-keyboard', {
             url: "/ionic-keyboard",
             views: {
             'menuContent' :{
             templateUrl: "templates/ionic-keyboard.html",
                 controller: 'CameraCtrl'
             }
             }
             })

             .state('app.network', {
             url: "/network",
             views: {
             'menuContent' :{
             templateUrl: "templates/network.html",
                 controller: 'NetworkCtrl'
             }
             }
             })

             .state('app.pin-dialog', {
             url: "/pin-dialog",
             views: {
             'menuContent' :{
             templateUrl: "templates/pin-dialog.html",
                 controller: 'PinDialogCtrl'
             }
             }
             })

             .state('app.push-notification', {
             url: "/push-notification",
             views: {
             'menuContent' :{
             templateUrl: "templates/push-notification.html",
                 controller: 'PushCtrl'
             }
             }
             })

             .state('app.scanner', {
             url: "/scanner",
             views: {
             'menuContent' :{
             templateUrl: "templates/scanner.html",
                 controller: 'CameraCtrl'
             }
             }
             })

             .state('app.social-sharing', {
             url: "/social-sharing",
             views: {
             'menuContent' :{
             templateUrl: "templates/social-sharing.html",
                 controller: 'SocialSharingCtrl'
             }
             }
             })

             .state('app.spinner-dialog', {
             url: "/spinner-dialog",
             views: {
             'menuContent' :{
             templateUrl: "templates/spinner-dialog.html",
                 controller: 'SpinnerDialogCtrl'
             }
             }
             })

             .state('app.splashscreen', {
             url: "/splashscreen",
             views: {
             'menuContent' :{
             templateUrl: "templates/splashscreen.html",
                 controller: 'SplashScreenCtrl'
             }
             }
             })

             .state('app.sql-lite', {
             url: "/sql-lite",
             views: {
             'menuContent' :{
             templateUrl: "templates/sql-lite.html",
                 controller: 'CameraCtrl'
             }
             }
             })

             .state('app.statusbar', {
             url: "/statusbar",
             views: {
             'menuContent' :{
             templateUrl: "templates/statusbar.html",
                 controller: 'StatusBarCtrl'
             }
             }
             })

            .state('app.toast', {
                url: "/toast",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/toast.html",
                        controller: 'ToastCtrl'
                    }
                }
            })

            .state('app.vibration', {
            url: "/vibration",
            views: {
            'menuContent' :{
            templateUrl: "templates/vibration.html",
                controller: 'VibrationCtrl'
            }
            }
            });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/accueil');
    });

