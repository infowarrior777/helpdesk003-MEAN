'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the clientApp
 
angular.module('clientApp')
  .controller('ProfileCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/

/*

angular.module('clientApp')
  .controller('ProfileCtrl', function (
  $scope,
  $routeParams,
  User
) {
  $scope.viewUser = true;
  $scope.user = User.one($routeParams.id).get().$object;
});


/*

angular.module('clientApp')
  .controller('ProfileCtrl', function (
  $scope,
  $routeParams,
  User,
  $rootscope
) {
  //$scope.viewUser = true;
  $rootscope.user = user;
});

*/

/*

angular.module('clientApp')
  .controller('ProfileCtrl', function (
  $scope,
  $routeParams,
  User
  //$rootscope
) {
  $scope.username = user.username;

//   $scope.user = User.all(user).getlist().$object;
});

  */


  angular.module('clientApp')
  .controller('ProfileCtrl', function (
  $scope,
  $routeParams,
  User
) {
  $scope.viewUser = true;
  $scope.user = User.one($routeParams.id).get().$object;
});
