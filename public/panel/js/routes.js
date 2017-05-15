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
                $state.go('login');
            }
            return deferred.promise;
        }];
        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            debug: false
        });

        $breadcrumbProvider.setOptions({
            prefixStateName: 'app.main',
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
            .state('app.main', {
                url: '/dashboard2',
                templateUrl: 'views/main.html',
                //page title goes here
                ncyBreadcrumb: {
                    label: 'Home',
                },
                //page subtitle goes here
                params: {subtitle: 'Welcome to ROOT powerfull Bootstrap & AngularJS UI Kit'},
                resolve: {
                    loginRequired: loginRequired,
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([
                            {
                                serie: true,
                                name: 'chart.js',
                                files: [
                                    'bower_components/chart.js/dist/Chart.min.js',
                                    'bower_components/angular-chart.js/dist/angular-chart.min.js'
                                ]
                            },
                        ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load controllers
                        return $ocLazyLoad.load({
                            files: ['js/controllers/main.js']
                        });
                    }]
                }
            })
            .state('appSimple', {
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
                url: '/owner-edit/{id:int}',
                templateUrl: 'views/garage/owners/form.html',
                ncyBreadcrumb: {
                    label: 'Edit Owner'
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

            .state('app.garage.cars', {
                url: '/owners',
                templateUrl: 'views/garage/cars/list.html',
                ncyBreadcrumb: {
                    label: 'Owners'
                }
            }).state('app.garage.carPart', {
            url: '/owners',
            templateUrl: 'views/garage/carPart/lsit.html',
            ncyBreadcrumb: {
                label: 'Owners'
            }
        })

        // Additional Pages
            .state('appSimple.login', {
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
            .state('appSimple.404', {
                url: '/404',
                templateUrl: 'views/pages/404.html'
            })
            .state('appSimple.500', {
                url: '/500',
                templateUrl: 'views/pages/500.html'
            })
    }]);
