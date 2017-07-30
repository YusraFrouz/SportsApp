const app = angular.module('ngMap',['ngRoute']).run(function ($rootScope) {
  $rootScope.logLatLng = function (e) {
    console.log('loc', e.latLng);
  }
});