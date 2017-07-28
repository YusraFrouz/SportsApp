angular.module('sportsApp').controller('loginCtrl',['$location','authentication','$scope',function($location,authentication,$scope){
    $scope.login = (credentials) => {
        console.log(credentials);
        authentication.login(credentials).then(() => {
            $location.path = '/profile';
        });
    }

}]);