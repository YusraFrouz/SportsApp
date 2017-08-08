angular.module('ngMap').controller('homeCtrl', ['$scope', '$http', 'authentication', function ($scope,$http, authentication) {
    currentUser = authentication.currentUser();
    console.log(currentUser);

    $scope.date = new Date();

    $scope.uploadFile = function(files) {
    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);

    $http.post('geoData/upload', fd, {
        withCredentials: true,
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity
    }).then(response => {console.log("Success")}).catch((err) => {console.log("failed")});


};
}]);