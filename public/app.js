const app = angular.module('ngMap',['ngRoute','socialbase.sweetAlert']).run(function ($rootScope) {
  $rootScope.logLatLng = function (e) {
    console.log('loc', e.latLng);
  }
});