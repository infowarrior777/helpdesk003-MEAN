'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TicketsCtrl
 * @description
 * # TicketsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TicketsCtrl', function ($scope, Ticket) {
  $scope.tickets = Ticket.getList().$object;
});