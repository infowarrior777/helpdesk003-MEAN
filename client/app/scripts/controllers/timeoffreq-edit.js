'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TimeoffreqEditCtrl
 * @description
 * # TimeoffreqEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TimeoffreqEditCtrl', function (
  $scope,
  $routeParams,
  Timeoff,
  $location
) {
  $scope.editTimeoff = true;
  $scope.timeoff = {};
  Timeoff.one($routeParams.id).get().then(function(timeoff) {
    $scope.timeoff = timeoff;
    $scope.saveTimeoff = function() {
      $scope.timeoff.save().then(function() {
        $location.path('/timeoff/' + $routeParams.id);
      });
    };
  });
});