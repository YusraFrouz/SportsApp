angular.module('ngMap').controller('friendsCtrl', ['$scope', 'friendsService',
    function ($scope, friendsService) {

        friendsService.get().then(friends => {
            $scope.friends = friends;
        })


    }]);