angular.module('ngMap').controller('homeCtrl', ['$scope', '$http', 'authentication', 'activityService', 
function ($scope, $http, authentication, activityService) {
    currentUser = authentication.currentUser();
    console.log(currentUser);

    $scope.date = new Date();

    $scope.response = {}
    
    $scope.uploadFile = function (files) {
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

        $http.post('geoData/upload', fd, {
            withCredentials: true,
            headers: { 'Content-Type': undefined },
            transformRequest: angular.identity
        }).then(response => { console.log(response); $scope.response = response.data }).catch((err) => { console.log("failed") });
    };

    $scope.submit = function(data){
        data.datetime = $scope.date;
        data.map = $scope.response._id;
        activityService.post(authentication.currentUser().userId, data).then(response => {
            console.log(response);
        })
    }

    

}]);