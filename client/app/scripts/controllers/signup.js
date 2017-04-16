'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SignupCtrl', function($scope, $http, $rootScope, $location) {
  $scope.signup = function(user) {

    // TODO: verify passwords are the same and notify user
    if (user.password === user.password2) {
      $http.post('/auth/signup', user)
        .success(function(user) {
          $rootScope.currentUser = user;
          $location.url("/profile");
        });
    }
  };
});