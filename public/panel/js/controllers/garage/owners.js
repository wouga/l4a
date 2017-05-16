angular
    .module('app')
    .controller('GarageOwnerFormCtrl', function ($scope, $state, $stateParams, GarageOwnerService) {
        var id = $stateParams.id;
        $scope.mode = 'ADD';
        $scope.item = {sex: 0};
        $scope.errors = null;
        $scope.sexes = {
            0: "Male",
            1: "Female",
        };
        $scope.myFixedSexes = [];
        $scope.$watchCollection('sexes', function () {
            $scope.myFixedSexes = [];
            angular.forEach($scope.sexes, function (value, key) {
                $scope.myFixedSexes.push({key: parseInt(key, 10), value: value});
            });
        });

        var loadRemoteData = function (id) {
            GarageOwnerService.getData({}, id)
                .then(function (data) {
                    $scope.item = data;
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
            GarageOwnerService.saveData($scope.item, id)
                .then(function (data) {
                    $scope.item = data;
                    $state.go('app.garage.owners');
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


        var init = function () {
            id = $stateParams.id;
            if (id) {
                $scope.mode = 'EDIT'
                loadRemoteData(id);
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
            $state.go('app.garage.owners');
        };
        init();

    });
angular
    .module('app')
    .controller('GarageOwnerListCtrl', function ($scope, $state, GarageOwnerService) {
        $scope.items = [];
        $scope.res = {};
        $scope.addCar = function (item) {
            $state.go('app.garage.carsAdd', {owner_id: item.id});
        }
        $scope.showCarByOwner = function (item) {
            $state.go('app.garage.cars', {owner_id: item.id});
        };
        $scope.editOwner = function (item) {
            $state.go('app.garage.ownersEdit', {id: item.id});
        };
        $scope.deleteOwner = function (item) {
            deleteData(item.id);
        };
        var loadRemoteData = function (page) {
            if (typeof page === 'undefined') {
                page = 1;
            }
            GarageOwnerService.getData({page: page})
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
            GarageOwnerService.deleteData(id)
                .then(function (data) {
                    $scope.res = data;
                    $scope.items = data.data;
                }, function (res) {
                    if (res.status && res.status === 403) {
                        console.error('Access Denied');
                        return;
                    }
                    if (res.status && res.status === 400) {
                        console.error('Access Denied');
                        $state.go('appPage.login');
                        return;
                    }
                    console.error('Cannon get data');
                });
        }

        var init = loadRemoteData
        $scope.loadPage = loadRemoteData;
        init();
    });


angular.module('app').service('GarageOwnerService', function ($http, $q) {

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
            url: '/api/owner' + urlID,
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
            url: '/api/owner' + ((typeof id !== "undefined") ? ('/' + id) : ''),
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
            url: "/api/owner" + ((typeof id !== "undefined") ? ('/' + id) : ''),
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


