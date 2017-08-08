angular.module('ngMap').controller('mapctrl', ['$scope', 'geoLocationservice', '$routeParams',
        function mapCtrl($scope, geoLocationservice, $routeParams) {
    let vm = this;

    $scope.mode = "walking";

    let get = () => {
            let mapId = $routeParams.mapId;
            console.log(mapId);
            geoLocationservice.get(mapId).then(response => {

            formatResponse(response).then(formattedResponse => {
                console.log(formattedResponse);
                $scope.origin = formattedResponse.origin;
                $scope.destination = formattedResponse.destination;
                $scope.waypoints = formattedResponse.waypoints;
            });
        });
    }
    get();

    let formatResponse = (response) => {
        let waypoints = [];
        let origin = "";
        let destination = "";

        // console.log(response);

        return new Promise((resolve, reject) => {

            for (var i = 0; i < response.length; i++) {

                if (i === 0) {
                    origin = {
                        lat: parseFloat(response[i][1]),
                        lng: parseFloat(response[i][0])
                    };
                } else if (i == response.length-1) {
                   destination = {
                        lat: parseFloat(response[i][1]),
                        lng: parseFloat(response[i][0])
                    };
                } else {
                    let waypoint = {
                        location: {
                            lat: parseFloat(response[i][1]),
                            lng: parseFloat(response[i][0])
                        },
                        stopover: true
                    }

                    waypoints.push(waypoint);
                }       
            }

            resolve({
                'origin':origin,
                'waypoints':waypoints,
                'destination':destination
            });
        })
    }

}]);