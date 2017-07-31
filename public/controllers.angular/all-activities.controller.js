angular.module('ngMap').controller('activityCtrl', ['$scope', 'activityService', 'authentication', function ($scope, activityService, authentication) {

    id = authentication.currentUser(); 
    
    activityService.get(id).then(activities => {
        $scope.activities = activities;
    })

    $scope.update = (id) => {
        activityService.put(id).then(activities => {
            $scope.activities = activities;
        })
    }

    $scope.delete = (id) => {
        activityService.delete(id).then(activities => {
            $scope.activities = activities;
            activityService.get(id).then(activities => {
                $scope.activities = activities;
            })
        })
    }

    $scope.sortBy = 'id';
    $scope.reverse = false;
    $scope.doSort = function (propName) {
         $scope.sortBy = propName;
         $scope.reverse = !$scope.reverse;
    };
}]);