angular.module('ngMap').controller('homeCtrl',['$scope','authentication',function($scope,authentication){
    currentUser = authentication.currentUser();
    console.log(currentUser);
}]);