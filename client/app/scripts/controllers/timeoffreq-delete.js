'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TimeoffreqDeleteCtrl
 * @description
 * # TimeoffreqDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TimeoffreqDeleteCtrl', function (
  $scope,
  $routeParams,
  Timeoff,
  $location
) {
  $scope.timeoff = Timeoff.one($routeParams.id).get().$object;
  $scope.deleteTimeoff = function() {
    $scope.timeoff.remove().then(function() {
      $location.path('/timeoff');
    });
  };
  $scope.back = function() {
    $location.path('/timeoff/' + $routeParams.id);
  };
});