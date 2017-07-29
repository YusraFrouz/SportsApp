angular.module('sportsApp').controller('registerCtrl',['$location','authentication','$scope',function($location,authentication,$scope){

    $scope.register = (credentials) => {
        console.log(credentials);

        authentication.register(credentials).then(()=> {
            currentUser = authentication.currentUser();
            console.log(currentUser);
        });
    }
}]);