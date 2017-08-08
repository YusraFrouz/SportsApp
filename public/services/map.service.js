angular.module('ngMap').factory('geoLocationservice',['$http',function($http){
    return {
            get: (id) => $http.get('/geoData/'+id).then(response => response.data)
    };
}]);