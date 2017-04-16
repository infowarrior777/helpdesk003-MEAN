'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TicketDeleteCtrl
 * @description
 * # TicketDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TicketDeleteCtrl', function (
  $scope,
  $routeParams,
  Ticket,
  $location
) {
  $scope.ticket = Ticket.one($routeParams.id).get().$object;
  $scope.deleteTicket = function() {
    $scope.ticket.remove().then(function() {
      $location.path('/ticket');
    });
  };
  $scope.back = function() {
    $location.path('/ticket/' + $routeParams.id);
  };
});