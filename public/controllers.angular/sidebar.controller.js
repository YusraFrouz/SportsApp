angular.module('ngMap').controller('sidebarCtrl', ['$location', 'authentication', '$scope', 'SweetAlert', function ($location, authentication, $scope, SweetAlert) {

    function deleteUser(){
        
        let delUser = authentication.currentUser().userId;
        console.log('jsfbsjfsfbsjfbjsfbjsfbsj');
        console.log(delUser);
        authentication.deleteUser(delUser).then(() => {
            console.log('dmkjsdjsc');
        });
    }

    $scope.showAlert = () => {
        SweetAlert.swal({
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        },
            function () {
                deleteUser();
            });

    }
}]);

