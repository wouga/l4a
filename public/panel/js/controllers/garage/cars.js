angular
    .module('app')
    .controller('GarageCarFormCtrl', function ($scope, $state, $stateParams, GarageCarService, GarageOwnerService) {
        var id = $stateParams.id;

        $scope.mode = 'ADD';
        $scope.owners = [];
        $scope.item = {color: '000000'};
        if ($state.params && $state.params.owner_id) {
            $scope.item.owner_id = $state.params.owner_id.toString();
            ;
        }
        $scope.errors = null;
        $scope.models = [
            {id: 'audi', name: 'audi'},
            {id: 'vw', name: 'vw'},
            {id: 'bmw', name: 'bmw'},
            {id: 'opel', name: 'opel'},
            {id: 'mercedes', name: 'mercedes'},
            {id: 'mazda', name: 'mazda'}
        ];


        var loadRemoteData = function (id) {
            GarageCarService.getData({}, id)
                .then(function (data) {
                    $scope.item = data;
                    $scope.item.owner_id = data.owner_id.toString();
                    getOwners();
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
            GarageCarService.saveData($scope.item, id)
                .then(function (data) {
                    $scope.item = data;
                    $state.go('app.garage.cars');
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

        var getOwners = function () {
            GarageOwnerService.getData({all: true}).then(function (data) {
                for (var i in data) {
                    $scope.owners.push({id: data[i].id, value: data[i]});
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
                getOwners();
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
            $state.go('app.garage.cars');
        };
        init();

    });
angular
    .module('app')
    .controller('GarageCarListCtrl', function ($scope, $state, GarageCarService) {
        $scope.items = [];
        $scope.res = {};
        $scope.params = $state.params;
        $scope.showCarPartsByCar = function () {

        };
        $scope.showAllCars = function (item) {
            $scope.params.owner_id = null;
            loadRemoteData();
        }

        $scope.editCar = function (item) {
            $state.go('app.garage.carsEdit', {id: item.id});
        };
        $scope.addCarPart = function (item) {
            $state.go('app.garage.carPartsAdd', {car_id: item.id});
        }
        $scope.showCarPartsByCar = function (item) {
            $state.go('app.garage.carParts', {car_id: item.id});
        };
        $scope.deleteCar = function (item) {
            deleteData(item.id);
        };
        var loadRemoteData = function (page) {
            if (typeof page === 'undefined') {
                page = 1;
            }
            var params = angular.merge($scope.params, {page: page});
            GarageCarService.getData(params)
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
            GarageCarService.deleteData(id)
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


angular.module('app').service('GarageCarService', function ($http, $q) {

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
            url: '/api/car' + urlID,
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
            url: '/api/car' + ((typeof id !== "undefined") ? ('/' + id) : ''),
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
            url: "/api/car" + ((typeof id !== "undefined") ? ('/' + id) : ''),
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