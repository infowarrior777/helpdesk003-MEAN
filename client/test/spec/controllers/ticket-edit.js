'use strict';

describe('Controller: TicketEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TicketEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TicketEditCtrl = $controller('TicketEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TicketEditCtrl.awesomeThings.length).toBe(3);
  });
});
