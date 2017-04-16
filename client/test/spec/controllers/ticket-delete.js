'use strict';

describe('Controller: TicketDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TicketDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TicketDeleteCtrl = $controller('TicketDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TicketDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
