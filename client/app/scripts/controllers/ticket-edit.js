'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TicketEditCtrl
 * @description
 * # TicketEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TicketEditCtrl', function (
  $scope,
  $routeParams,
  Ticket,
  $location
) {
  $scope.editTicket = true;
  $scope.ticket = {};
  Ticket.one($routeParams.id).get().then(function(ticket) {
    $scope.ticket = ticket;
    $scope.saveTicket = function() {
      $scope.ticket.save().then(function() {
        $location.path('/ticket/' + $routeParams.id);
      });
    };
  });
});