'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 
angular.module('clientApp')
  .controller('LoginCtrl', function($location, $scope, $http, $rootScope) {
  $scope.login = function(user) {
    $http.post('/login', user)
      .success(function(response) {
        $rootScope.currentUser = response;
        $location.url("/profile");
      });
  };
});

*/
/*
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, User, $location) {
  $scope.user = {};
  $scope.login = function(user) {
    User.one(user).get().$object.then(function() {
      $location.path('/profile');
    });
  };
});

*/

/*

  angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $http, $location, $rootScope) {
  $scope.user = {};
  $scope.login = function(user) {
    $http.post('/auth/login', user)
      .success(function(response) {
        $rootScope.user = response;
        $location.url("/profile");
      });
  };
});

*/


/*

angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, User, $location) {
  $scope.user = {};
  $scope.login = function(user) {
    User.allUrl('user','http://localhost:3000/auth/login').then(function() {
      $location.path('/profile');
    });
  };
});


*/

/*

angular.module('clientApp')
  .controller('UserViewCtrl', function (
  $scope,
  $routeParams,
  User
) {
  $scope.viewUser = true;
  $scope.user = User.one($routeParams.username).get().$object;

});

*/

/*
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $http, $location, $rootScope) {
  $scope.user = {};
  $scope.login = function(user) {
    $http.post('http://localhost:3000/auth/login', user)
      .success(function(response) {
        $rootScope.user = response;
     //   $location.url("/profile");
      });
  };
});

*/

/*
angular.module('clientApp')
  .controller('LoginCtrl', function (
  $scope,
  $routeParams,
  User,
  $location,
  $rootScope
) {
  $scope.viewUser = true;
  $scope.user = {};
  //$scope.user = User.one($routeParams.id).get().$object;
  $scope.login = function(user) {
   // $scope.users = User.getList().$object;
  	$scope.user = User.one(user).get('username').$object;
  	console.log(user);

  	if (!user) {
  	$location.path('/login', { error: 'No user found'})
  }

  else {
  	//$rootScope.user = user;
  	$location.path('/user/' + $routeParams.id);
  }
};

});
*/
/*
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $http, $location, $rootScope) {
  $scope.user = {};
  $scope.login = function(user) {
    $http.post('http://localhost:3000/auth/login', user)
      .success(function(response) {
        $rootScope.user = response;
     //   $location.url("/profile");
      });
  };
});
*/

/*

angular.module('clientApp')
  .controller('LoginCtrl', function (
  $scope,
  $routeParams,
  User,
  $location,
  $rootScope
) {
  $scope.viewUser = true;
  $scope.user = {};
  //$scope.user = User.one($routeParams.id).get().$object;
  $scope.login = function(user) {
    $scope.users = User.getList().$object;
    
  	//$scope.user = User.one(user).get('username').$object;
  	

  	
};

});

*/

angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $http, $location, $rootScope) {
  $scope.user = {};
  $scope.login = function(user) {
    $http.post('http://localhost:3000/auth/login', user)
      .success(function(response) {
        $rootScope.user = response;
        $location.url("/profile");
      });
  };
});