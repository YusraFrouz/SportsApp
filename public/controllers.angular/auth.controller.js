angular.module('ngMap').controller('authCtrl',['$location','authentication','$scope',function($location,authentication,$scope){

    $scope.register = (credentials) => {
        console.log(credentials);

        authentication.register(credentials).then(()=> {
            currentUser = authentication.currentUser();
            console.log(currentUser);
        });
    }

    $scope.login = (credentials) => {
        console.log(credentials);

        authentication.login(credentials).then(() => {
            currentUser = authentication.currentUser();
            $location.path('/');
        });
    }
}]);