angular.module('ngMap').controller('friendsCtrl', ['$scope', 'friendsService', 'authentication',
    function ($scope, friendsService, authentication) {

        id = authentication.currentUser().userId; 

        friendsService.get(id).then(friends => {
            $scope.friends = friends;
        })


    }]);