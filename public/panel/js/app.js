// Default colors
var brandPrimary = '#20a8d8';
var brandSuccess = '#4dbd74';
var brandInfo = '#63c2de';
var brandWarning = '#f8cb00';
var brandDanger = '#f86c6b';

var grayDark = '#2a2c36';
var gray = '#55595c';
var grayLight = '#818a91';
var grayLighter = '#d1d4d7';
var grayLightest = '#f8f9fa';

angular
    .module('app', [
        'ui.router',
        'ui.router.state.events',
        'oc.lazyLoad',
        'ngCookies',
        'ncy-angular-breadcrumb',
        'angular-loading-bar',
        'colorpicker.module',
        'satellizer'
    ])
    .config(['cfpLoadingBarProvider', '$authProvider', function (cfpLoadingBarProvider, $authProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.latencyThreshold = 1;
        $authProvider.loginUrl = '/api/auth/login';
    }])
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$on('$stateChangeSuccess', function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });

        $rootScope.$state = $state;
        return $rootScope.$stateParams = $stateParams;
    }]);


angular
    .module('app')
    .controller('AppCtrl', function ($rootScope, $scope, $auth, $state, $cookies) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
            $scope.isAuthenticated = function () {
                return $auth.isAuthenticated();
            }
            $scope.logout = function () {
                $auth.logout();
                $state.go('app.garage.owners');
            }
            if (toState.name !== 'appPage.login') {
                $cookies.put('goToHref', $state.href(toState, toParams, {absolute: true}));
            }
        });
    });