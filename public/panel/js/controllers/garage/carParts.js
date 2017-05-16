angular
    .module('app')
    .controller('GarageCarPartFormCtrl', function ($scope, $state, $stateParams, GarageCarPartService, GarageCarService) {
        var id = $stateParams.id;
        $scope.mode = 'ADD';
        $scope.cars = [];
        $scope.item = {};
        if ($state.params && $state.params.car_id) {
            $scope.item.car_id = $state.params.car_id.toString();
        }
        $scope.errors = null;
        var loadRemoteData = function (id) {
            GarageCarPartService.getData({}, id)
                .then(function (data) {
                    $scope.item = data;
                    $scope.item.car_id = data.car_id.toString();
                    getCars();
                }, function (res) {
                    $scope.loadingData = false;
                    if (res.status && res.status === 403) {
                        console.error('Access Denied');
                        return;
                    }
                    console.error('Cannon get data');
                });
        }

        var saveData = function (id) {
            $scope.errors = null;
            GarageCarPartService.saveData($scope.item, id)
                .then(function (data) {
                    $scope.item = data;
                    $state.go('app.garage.carParts');
                }, function (res) {
                    $scope.loadingData = false;
                    if (res.status && res.status === 403) {
                        console.error('Access Denied');
                        return;
                    }
                    if (res.status && res.status === 422) {
                        console.error('Invalid Data');
                        $scope.errors = res.data;
                        return;
                    }
                    console.error('Cannon get data');
                });
        }

        var getCars = function () {
            GarageCarService.getData({all: true}).then(function (data) {
                for (var i in data) {
                    $scope.cars.push({id: data[i].id, value: data[i]});
                }
            }, function (res) {
                if (res.status && res.status === 403) {
                    console.error('Access Denied');
                    return;
                }
                console.error('Cannon get data');
            });
        };
        var init = function () {

            id = $stateParams.id;
            if (id) {
                $scope.mode = 'EDIT'
                loadRemoteData(id);
            } else {
                getCars();
            }
        }

        $scope.save = function () {
            if ($scope.mode === 'EDIT') {
                saveData(id);
            } else {
                saveData();
            }
        }
        $scope.goBack = function () {
            $state.go('app.garage.carParts');
        };
        init();

    });
angular
    .module('app')
    .controller('GarageCarPartListCtrl', function ($scope, $state, GarageCarPartService) {
        $scope.items = [];
        $scope.res = {};
        $scope.params = $state.params;
        $scope.showCarPartsByCar = function () {

        };
        $scope.showAllCarParts = function (item) {
            $scope.params.car_id = null;
            loadRemoteData();
        }
        $scope.editCarPart = function (item) {
            $state.go('app.garage.carPartsEdit', {id: item.id});
        };
        $scope.deleteCarPart = function (item) {
            deleteData(item.id);
        };
        var loadRemoteData = function (page) {
            if (typeof page === 'undefined') {
                page = 1;
            }
            var params = angular.merge($scope.params, {page: page});
            GarageCarPartService.getData(params)
                .then(function (data) {
                    $scope.res = data;
                    $scope.items = data.data;
                }, function (res) {
                    if (res.status && res.status === 403) {
                        console.error('Access Denied');
                        return;
                    }
                    console.error('Cannon get data');
                });
        }

        var deleteData = function (id) {
            GarageCarPartService.deleteData(id)
                .then(function (data) {
                    $scope.res = data;
                    $scope.items = data.data;
                }, function (res) {
                    if (res.status && res.status === 403) {
                        console.error('Access Denied');
                        return;
                    }
                    console.error('Cannon get data');
                });
        }

        var init = loadRemoteData
        $scope.loadPage = loadRemoteData;
        init();
    });


angular.module('app').service('GarageCarPartService', function ($http, $q) {

    return ({
        getData: getData,
        saveData: saveData,
        deleteData: deleteData
    });

    function saveData(data, id) {
        if (typeof params === "undefined" || !angular.isObject(params)) {
            params = {};
        }
        var urlID = '';
        var method = 'POST';
        if (typeof id !== "undefined") {
            urlID = '/' + id;
            method = 'PUT';
        }
        var request = $http({
            method: method,
            url: '/api/car-part' + urlID,
            transformRequest: false,
            data: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        });
        return (request.then(handleSuccess, handleError));
    }

    function deleteData(id) {
        if (typeof params === "undefined" || !angular.isObject(params)) {
            params = {};
        }
        var request = $http({
            method: 'DELETE',
            url: '/api/car-part' + ((typeof id !== "undefined") ? ('/' + id) : ''),
            headers: {'Content-Type': 'application/json'}
        });
        return (request.then(handleSuccess, handleError));
    }


    function getData(params, id) {
        if (typeof params === "undefined" || !angular.isObject(params)) {
            params = {};
        }
        var request = $http({
            method: "GET",
            url: "/api/car-part" + ((typeof id !== "undefined") ? ('/' + id) : ''),
            params: params
        });
        return (request.then(handleSuccess, handleError));
    }


    function handleSuccess(response) {
        if (!angular.isObject(response.data)) {
            return ($q.reject("An unknown error occurred."));
        }
        return (response.data);
    }

    function handleError(response) {
        if (response.status < 500) {
            return ($q.reject(response));
        }
        if (!angular.isObject(response.data)) {
            return ($q.reject("An unknown error occurred."));
        }
        return ($q.reject(response));
    }
});


angular
    .module('app').directive('transformHex', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {

            if (ngModel) { // Don't do anything unless we have a model

                ngModel.$parsers.push(function (value) {
                    if (value.charAt(0) === '#') {
                        return value.slice(1);
                    }
                    return value;
                });

                ngModel.$formatters.push(function (value) {
                    return "#" + value;
                });

            }
        }
    };
});