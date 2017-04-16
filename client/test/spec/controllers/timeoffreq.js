'use strict';

describe('Controller: TimeoffreqCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TimeoffreqCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimeoffreqCtrl = $controller('TimeoffreqCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TimeoffreqCtrl.awesomeThings.length).toBe(3);
  });
});
