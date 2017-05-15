angular
    .module('app')
    .controller('LoginCtrl', function ($scope, $auth, $q, $state) {

        $scope.user = {};
        $scope.error = null;
        $scope.login = function () {
            $scope.error = null;
            var deferred = $q.defer();
            $auth.login($scope.user).then(function (response) {
                $scope.user = {};
                deferred.resolve('success');
                console.log(arguments);
                if (response && response.data && response.data.error) {
                    $scope.error = response.data.error;
                }
                if (response && response.data && response.data.token) {
                    $state.go('app.garage.owners');
                    console.log('success');
                }
            }).catch(function (response) {
                console.log(arguments);
                if (response && response.data && response.data.error) {
                    $scope.error = response.data.error;
                }
                deferred.reject('failure');
            });
            return deferred.promise;
        };


        var init = function () {
        }

        init();
    });

angular.module('app').directive('setFocus', function ($timeout) {
    return function ($scope, $element, $attr) {
        if ($attr.setFocus !== false) {
            var timeout = 750; // wait 750 ms before evaluating
            var focus = true;
            if ($attr.setFocus) {
                // if we have focus criteria, then evaluate it against the scope (ex: set-focus="myValue === 1")
                focus = $scope.$eval($attr.setFocus);
            }

            // if we need to set focus to this element, then wait for the timeout and set focus
            if (focus) {
                $timeout(function () {
                    $element[0].focus();
                }, timeout);
            }
        }
    };
});
angular.module('app').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});