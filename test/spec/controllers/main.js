'use strict';

describe('Controller: main', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var Controller,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Controller = $controller('main', {
      $scope: scope
    });
  }));

  it('should attach a list of algorithms to the scope', function () {
    expect(scope.algorithms.length).toBe(5);
  });
});