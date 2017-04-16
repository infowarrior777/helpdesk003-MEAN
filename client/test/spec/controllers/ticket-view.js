'use strict';

describe('Controller: TicketViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TicketViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TicketViewCtrl = $controller('TicketViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TicketViewCtrl.awesomeThings.length).toBe(3);
  });
});
