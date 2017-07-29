(function () {

    angular.module('sportsApp', ['ngRoute']);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/login.view.html'
            })
            .when('/home', {
                templateUrl: '/views/home.view.html',
                controller: 'homeCtrl'
            })
            .otherwise({ redirectTo: '/' });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }

    function run($rootScope, $location, authentication) {
        $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
            if ($location.path() === '/home' && !authentication.isLoggedIn()) {
                $location.path('/');
            }
        });
    }

    angular
        .module('sportsApp')
        .config(['$routeProvider', '$locationProvider', config])
        .run(['$rootScope', '$location', 'authentication', run]);

})();