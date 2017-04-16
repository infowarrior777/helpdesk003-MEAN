'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TimeoffreqViewCtrl
 * @description
 * # TimeoffreqViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TimeoffreqViewCtrl', function (
  $scope,
  $routeParams,
  Timeoff
) {
  $scope.viewTimeoff = true;
  $scope.timeoff = Timeoff.one($routeParams.id).get().$object;
});