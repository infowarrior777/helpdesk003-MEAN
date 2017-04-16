'use strict';

describe('Controller: TimeoffreqDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TimeoffreqDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimeoffreqDeleteCtrl = $controller('TimeoffreqDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TimeoffreqDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
