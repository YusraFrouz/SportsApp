angular.module('sportsApp').controller('homeCtrl',['$scope','authentication',function($scope,authentication){
    currentUser = authentication.currentUser();
    console.log(currentUser);
}]);