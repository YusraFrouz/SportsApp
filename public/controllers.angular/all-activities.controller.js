angular.module('ngMap').controller('activityCtrl', ['$scope', 'activityService', function ($scope, activityService) {
    
    $scope.sortBy = 'id';
    $scope.reverse = false;
    $scope.doSort = function (propName) {
         $scope.sortBy = propName;
         $scope.reverse = !$scope.reverse;
    };
    
    activityService.get(1).then(activities => {
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
            activityService.get(1).then(activities => {
                $scope.activities = activities;
            })
        })
    }
}]);