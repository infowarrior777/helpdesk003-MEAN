'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TimeoffreqCtrl
 * @description
 * # TimeoffreqCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('TimeoffCtrl', function ($scope, Timeoff) {
  $scope.timeoff = Timeoff.getList().$object;
});