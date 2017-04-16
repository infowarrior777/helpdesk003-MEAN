'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TicketViewCtrl
 * @description
 * # TicketViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TicketViewCtrl', function (
  $scope,
  $routeParams,
  Ticket
) {
  $scope.viewTicket = true;
  $scope.ticket = Ticket.one($routeParams.id).get().$object;
});