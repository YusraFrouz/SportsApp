(function () {

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/home.view.html',
                controller: 'homeCtrl'
            })
            .when('/login', {
                templateUrl: '/views/login.view.html',
                controller: 'authCtrl'
                
            })
            .when('/activities',{
                templateUrl: '/views/all-activities.view.html',
                controller: 'activityCtrl'
            })
            .when('/friends',{
                templateUrl: '/views/all-friends.view.html',
                controller: 'friendsCtrl'
            })
            .when('/map/:mapId',{
                templateUrl: '/views/map.view.html',
                controller: 'mapctrl'
            })
            .otherwise({ redirectTo: '/' });

        // use the HTML5 History API
        // $locationProvider.html5Mode(true);
    }

    function run($rootScope, $location, authentication) {
        $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
            if ($location.path() === '/' && !authentication.isLoggedIn()) {
                $location.path('/login');
            }
        });
    }

    angular
        .module('ngMap')
        .config(['$routeProvider', '$locationProvider', config])
        .run(['$rootScope', '$location', 'authentication', run]);

})();