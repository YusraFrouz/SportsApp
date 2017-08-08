angular.module('ngMap').factory('friendsService',['$http',function($http){
    return {
        get: (id) => $http.get('friends/'+ id).then(response => response.data)
    }
}]);