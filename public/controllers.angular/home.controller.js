angular.module('ngMap').controller('homeCtrl', ['$scope','$http' ,'authentication', function ($scope, $http, authentication) {
    currentUser = authentication.currentUser();
    console.log(currentUser);

    $scope.uploadFile = function (files) {
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

        console.log(files);
        // $http.post('/spectrum/addFile', fd, {
        //     withCredentials: true,
        //     headers: { 'Content-Type': undefined },
        //     transformRequest: angular.identity
        // }).then(response => console.log(response));
    }
}]);