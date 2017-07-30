angular.module('ngMap').controller('authCtrl', ['$location', 'authentication', '$scope', 'SweetAlert', function ($location, authentication, $scope, SweetAlert) {

    $scope.register = (credentials) => {
        authentication.register(credentials).then(() => {
            $location.path('/');
        });
    }

    $scope.login = (credentials) => {
        authentication.login(credentials).then(response => {
             $location.path('/');
        }).catch(response => {
            SweetAlert.swal({
                type: 'warning',
                text: response.data.message
            }).then(function (response) {
                console.log('World says hello too!');
            });
        });
    }
}]);


$scope.login = true;

authentication.logout();