angular
    .module('app')
    .controller('GarageOwnerListCtrl', function ($scope, GarageOwnerService) {
        $scope.items = [];
        $scope.res = {};
        $scope.showCarByOwner = function () {

        };
        function loadRemoteData(page) {
            if (typeof page === 'undefined') {
                page = 1;
            }
            GarageOwnerService.getData(page)
                .then(function (data) {
                    $scope.res = data;
                    $scope.items = data.data;
                }, function (res) {
                    $scope.loadingData = false;
                    if (res.status && res.status === 403) {
                        console.error('You do not have permission to this section.');
                        return;
                    }
                    console.error('Cannot get info.');
                });
        }

        var init = loadRemoteData
        $scope.loadPage = loadRemoteData;
        init();
    });
angular.module('app').service('GarageOwnerService', function ($http, $q) {

    return ({
        getData: getData
    });

    function getData(page) {
        var request = $http({
            method: "GET",
            url: "/api/owner",
            params: {page: page}
        });
        return (request.then(handleSuccess, handleError));
    }

    function deleteData(id, mode) {
        var request = $http({
            method: "DELETE",
            url: "/api/owner/" + id,
            params: {
                mode: mode
            }
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
            console.error(response);
            return ($q.reject(response));
        }
        if (!angular.isObject(response.data)) {
            return ($q.reject("An unknown error occurred."));
        }
        return ($q.reject(response));
    }
});


