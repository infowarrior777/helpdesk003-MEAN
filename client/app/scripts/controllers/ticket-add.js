'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TicketAddCtrl
 * @description
 * # TicketAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TicketAddCtrl', function ($scope, Ticket, $location) {
    $scope.ticket = {};
  $scope.saveTicket = function() {
    Ticket.post($scope.ticket).then(function() {
      $location.path('/tickets');
    });
  };
});