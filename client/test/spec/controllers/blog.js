'use strict';

describe('Controller: BlogCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var BlogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogCtrl = $controller('BlogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of posts to the scope', function () {
    expect(scope.posts).toBeDefined();
  });
});
