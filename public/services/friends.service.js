angular.module('ngMap').factory('friendsService',['$http',function($http){
    return {
        get: () => $http.get('friends/').then(response => response.data)
    }
}]);