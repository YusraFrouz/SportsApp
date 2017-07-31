angular.module('ngMap').factory('activityService',['$http',function($http){
    return {
        get: (id) => $http.get('activity/'+id).then(response => response.data),
        put: (id) => $http.put('activity/'+id).then(response => response.data),
        delete: (id) => $http.delete('activity/'+id).then(response => response.data)
    }
}]);