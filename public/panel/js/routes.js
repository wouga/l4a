angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', '$authProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider, $authProvider) {

        $urlRouterProvider.otherwise('/garage/owners');
        var skipIfLoggedIn = ['$q', '$state', '$auth', function ($q, $state, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                $state.go('app.garage.owners');
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        }];

        var loginRequired = ['$q', '$state', '$auth', function ($q, $state, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                $state.go('appPage.login');
            }
            return deferred.promise;
        }];
        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            debug: false
        });

        $breadcrumbProvider.setOptions({
            prefixStateName: 'app.garage',
            includeAbstract: true,
            template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
        });

        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'views/common/layouts/full.html',
                //page title goes here
                ncyBreadcrumb: {
                    label: 'Root',
                    skip: true
                },
                resolve: {
                    loadCSS: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load CSS files
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'Font Awesome',
                            files: ['css/font-awesome.min.css']
                        }, {
                            serie: true,
                            name: 'Simple Line Icons',
                            files: ['css/simple-line-icons.css']
                        }]);
                    }],
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'chart.js',
                            files: [
                                'bower_components/chart.js/dist/Chart.min.js',
                                'bower_components/angular-chart.js/dist/angular-chart.min.js'
                            ]
                        }]);
                    }],
                }
            })

            .state('app.garage', {
                url: "/garage",
                abstract: true,
                template: '<ui-view></ui-view>',
                ncyBreadcrumb: {
                    label: 'Garage'
                },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load(
                            [
                                {
                                    serie: true,
                                    files: ['js/directives/item-paginator.js', 'js/filters/range.js']
                                }, {
                                serie: true,
                                name: 'Font Awesome',
                                files: ['css/font-awesome.min.css']
                            }, {
                                serie: true,
                                name: 'Simple Line Icons',
                                files: ['css/simple-line-icons.css']
                            }]);
                    }],
                }
            })
            .state('app.garage.owners', {
                url: '/owners',
                templateUrl: 'views/garage/owners/list.html',
                ncyBreadcrumb: {
                    label: 'Owners'
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['js/controllers/garage/owners.js']
                        });
                    }]
                }
            })
            .state('app.garage.ownersEdit', {
                url: '/owner-form/{id:int}',
                templateUrl: 'views/garage/owners/form.html',
                ncyBreadcrumb: {
                    label: 'Edit Owner'
                },
                resolve: {
                    loginRequired: loginRequired,
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['js/controllers/garage/owners.js']
                        });
                    }]
                }
            })
            .state('app.garage.ownersAdd', {
                url: '/owner-form',
                templateUrl: 'views/garage/owners/form.html',
                ncyBreadcrumb: {
                    label: 'Edit Owner'
                },
                resolve: {
                    loginRequired: loginRequired,
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['js/controllers/garage/owners.js']
                        });
                    }]
                }
            })

            .state('app.garage.cars', {
                url: '/cars',
                templateUrl: 'views/garage/cars/list.html',
                params: {
                    owner_id: null
                },
                ncyBreadcrumb: {
                    label: 'Cars'
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['js/controllers/garage/cars.js']
                        });
                    }]
                }
            })
            .state('app.garage.carsEdit', {
                url: '/cars-form/{id:int}',
                templateUrl: 'views/garage/cars/form.html',
                ncyBreadcrumb: {
                    label: 'Edit Car'
                },
                resolve: {
                    loginRequired: loginRequired,
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: [
                                'js/controllers/garage/cars.js',
                                'js/controllers/garage/owners.js'
                            ]
                        });
                    }]
                }
            })
            .state('app.garage.carsAdd', {
                url: '/cars-form',
                templateUrl: 'views/garage/cars/form.html',
                ncyBreadcrumb: {
                    label: 'Edit Car'
                },
                params: {
                    owner_id: null
                },
                resolve: {
                    loginRequired: loginRequired,
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: [
                                'js/controllers/garage/cars.js',
                                'js/controllers/garage/owners.js'
                            ]
                        });
                    }]
                }
            })


            .state('app.garage.carParts', {
                url: '/car-parts',
                templateUrl: 'views/garage/carParts/list.html',
                ncyBreadcrumb: {
                    label: 'Car Parts'
                },
                params: {
                    car_id: null
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['js/controllers/garage/carParts.js']
                        });
                    }]
                }
            })
            .state('app.garage.carPartsEdit', {
                url: '/car-parts-form/{id:int}',
                templateUrl: 'views/garage/carParts/form.html',
                ncyBreadcrumb: {
                    label: 'Edit Car Part'
                },
                resolve: {
                    loginRequired: loginRequired,
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: [
                                'js/controllers/garage/carParts.js',
                                'js/controllers/garage/cars.js'
                            ]
                        });
                    }]
                }
            })
            .state('app.garage.carPartsAdd', {
                url: '/car-parts-form',
                templateUrl: 'views/garage/carParts/form.html',
                ncyBreadcrumb: {
                    label: 'Edit Car Part'
                },
                params: {
                    car_id: null
                },
                resolve: {
                    loginRequired: loginRequired,
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: [
                                'js/controllers/garage/carParts.js',
                                'js/controllers/garage/cars.js'
                            ]
                        });
                    }]
                }
            })

            .state('appPage', {
                abstract: true,
                templateUrl: 'views/common/layouts/simple.html',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'Font Awesome',
                            files: ['css/font-awesome.min.css']
                        }, {
                            serie: true,
                            name: 'Simple Line Icons',
                            files: ['css/simple-line-icons.css']
                        }]);
                    }],
                }
            })
            // Additional Pages
            .state('appPage.login', {
                url: '/login',
                templateUrl: 'views/pages/login.html',
                resolve: {
                    skip: skipIfLoggedIn,
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load controllers
                        return $ocLazyLoad.load({
                            files: ['js/controllers/auth.js']
                        });
                    }]
                }
            })
            .state('appPage.404', {
                url: '/404',
                templateUrl: 'views/pages/404.html'
            })
            .state('appPage.500', {
                url: '/500',
                templateUrl: 'views/pages/500.html'
            })
    }]);
