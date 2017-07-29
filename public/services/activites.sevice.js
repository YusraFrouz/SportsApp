angular.module('ngMap').factory('$http',function($http){
    return {
        get: (id) => $http.get('activity/'+id).then(response => response.data)
    }
});