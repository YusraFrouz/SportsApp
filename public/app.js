const app = angular.module('ngMap',['ngRoute','socialbase.sweetAlert']).run(function ($rootScope) {
  $rootScope.logLatLng = function(e) {
          console.log('loc', e.latLng);
        }
        $rootScope.wayPoints = [
          {location: {lat:44.32384807250689, lng: -78.079833984375}, stopover: true},
          {location: {lat:44.55916341529184, lng: -76.17919921875}, stopover: true},
        ];
});