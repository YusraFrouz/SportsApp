const app = angular.module('ngMap',['ngRoute','socialbase.sweetAlert','angularFileUpload']).run(function ($rootScope) {
  $rootScope.logLatLng = function (e) {
    console.log('loc', e.latLng);
  }
});