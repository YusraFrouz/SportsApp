angular.module('ngMap').controller('navCtrl',['$scope','authentication',function($scope,authentication){
    $scope.logout = () => {
        authentication.logout();
    }
    console.log("sans");

    $scope.toggle = ()=> {
        $scope.showPopup = !$scope.showPopup;
        console.log($scope.showPopup);
    }
}]);