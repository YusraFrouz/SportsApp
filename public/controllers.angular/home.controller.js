angular.module('ngMap').controller('homeCtrl', ['$scope', 'FileUploader','$http', 'authentication', function ($scope, FileUploader,$http, authentication) {
    currentUser = authentication.currentUser();
    console.log(currentUser);

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