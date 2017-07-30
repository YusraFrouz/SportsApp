angular.module('ngMap').controller('authCtrl',['$location','authentication','$scope',function($location,authentication,$scope){

    $scope.register = (credentials) => {
        authentication.register(credentials).then(()=> {
            $location.path('/');
        });
    }

    $scope.login = (credentials) => {
        authentication.login(credentials).then(() => {
            $location.path('/');
        });
    }
}]);