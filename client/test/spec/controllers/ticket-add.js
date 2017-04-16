'use strict';

describe('Controller: TicketAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TicketAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TicketAddCtrl = $controller('TicketAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TicketAddCtrl.awesomeThings.length).toBe(3);
  });
});
