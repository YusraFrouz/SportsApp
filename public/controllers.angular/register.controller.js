angular.module('sportsApp').controller('registerCtrl',['$location','authentication','$scope',function($location,authentication,$scope){
    var vm = this;

    $scope.register = (credentials) => {
        console.log(credentials);

        authentication.register(credentials).then(()=> {
            $location.path('profile');
        });
    }
}]);