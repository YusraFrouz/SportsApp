(function () {

  angular
    .module('ngMap')
    .service('authentication', authentication);

  authentication.$inject = ['$http', '$window'];
  function authentication ($http, $window) {

    var saveToken = function (token) {
      $window.localStorage['mean-token'] = token;
    };

    var getToken = function () {
      return $window.localStorage['mean-token'];
    };

    var isLoggedIn = function() {
      var token = getToken();
      var payload;

      if(token){
        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    var currentUser = function() {
      if(isLoggedIn()){
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return {
          userId : payload.userId,
          email : payload.email,
          fullname : payload.fullname
        };
      }
    };

    register = function(user) {
      return $http.post('/api/register', user).then(function(response){
        saveToken(response.data.token);
      });
    };

    login = function(user) {
      return $http.post('/api/login', user).then(function(response) {
        saveToken(response.data.token);
      });
    };

    logout = function() {
      $window.localStorage.removeItem('mean-token');
      window.location.href="/";
    };

    deleteUser = function(userId){
      return $http.delete("/api/"+userId).then(()=>{
        console.log('deleted sccessfully');
      })
    }

    return {
      currentUser : currentUser,
      saveToken : saveToken,
      getToken : getToken,
      isLoggedIn : isLoggedIn,
      register : register,
      login : login,
      logout : logout
    };
  }

  

})();